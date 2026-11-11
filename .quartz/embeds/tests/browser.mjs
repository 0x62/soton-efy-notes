import { chromium } from "@playwright/test";
import { createServer } from "node:http";
import { readFile, stat } from "node:fs/promises";
import { resolve, extname } from "node:path";
import assert from "node:assert/strict";
const root = resolve(
  process.env.QUARTZ_PUBLIC || "/workspace/shared/quartz-upstream/public",
);
const server = createServer(async (req, res) => {
  try {
    let path = decodeURIComponent(
      new URL(req.url, "http://localhost").pathname,
    ).replace(/^\/soton-efy-notes(?=\/)/, "");
    let file = resolve(root, "." + path);
    if (!file.startsWith(root + "/") && file !== root) throw Error("bad path");
    try {
      if ((await stat(file)).isDirectory()) file += "/index.html";
    } catch {
      file += ".html";
    }
    const body = await readFile(file);
    res.setHeader(
      "Content-Type",
      {
        ".html": "text/html",
        ".js": "application/javascript",
        ".css": "text/css",
        ".json": "application/json",
        ".svg": "image/svg+xml",
        ".png": "image/png",
        ".woff2": "font/woff2",
      }[extname(file)] || "application/octet-stream",
    );
    res.setHeader(
      "Cache-Control",
      file.includes("/assets/") ? "public,max-age=3600" : "no-cache",
    );
    res.end(body);
  } catch {
    res.writeHead(404);
    res.end("Not found");
  }
});
await new Promise((r) => server.listen(4178, "127.0.0.1", r));
const browser = await chromium.launch({
  executablePath: process.env.CHROMIUM_PATH,
  headless: true,
  args: ["--no-sandbox"],
});
try {
  const context = await browser.newContext({
    viewport: { width: 1280, height: 900 },
  });
  const page = await context.newPage(),
    errors = [];
  page.on("pageerror", (e) => errors.push(e.message));
  const requests = [];
  page.on("request", (r) => requests.push(r.url()));
  for (const base of ["", "/soton-efy-notes"]) {
    await page.goto(
      "http://127.0.0.1:4178" + base + "/y1/elec1311/rc-transients",
    );
    const iframe = page.locator("iframe[data-notes-embed]");
    await iframe.scrollIntoViewIfNeeded();
    const frame = page.frameLocator("iframe[data-notes-embed]");
    await frame
      .getByRole("status")
      .filter({ hasText: "Simulation complete" })
      .waitFor({ timeout: 15000 });
    assert.equal(await frame.locator("[data-series]").count(), 2);
    assert.ok((await frame.locator("svg").count()) > 0);
    assert.equal(await frame.locator("#voltage").inputValue(), "10");
    await frame.locator("#voltage").fill("20");
    await frame
      .getByRole("status")
      .filter({ hasText: "Simulation complete" })
      .waitFor();
    assert.ok(
      Math.abs(
        Number(
          await frame
            .locator("tbody tr")
            .nth(1)
            .locator("td")
            .nth(1)
            .textContent(),
        ) - 12.64,
      ) < 0.1,
    );
    await page.evaluate(() =>
      document.documentElement.setAttribute("saved-theme", "dark"),
    );
    await frame.locator("html[data-theme=dark]").waitFor();
    assert.equal(
      await frame
        .locator("body")
        .evaluate((el) => getComputedStyle(el).backgroundColor),
      "rgb(22, 22, 24)",
    );
    await frame.getByRole("button", { name: "Reset example" }).click();
    await frame
      .getByRole("status")
      .filter({ hasText: "Simulation complete" })
      .waitFor();
    assert.equal(await frame.locator("#voltage").inputValue(), "10");
    await page.setViewportSize({ width: 375, height: 812 });
    assert.ok(
      await frame
        .locator("body")
        .evaluate((el) => el.scrollWidth <= innerWidth),
    );
    await page.screenshot({
      path: "/tmp/notes-embed-mobile.png",
      fullPage: false,
    });
    await page.setViewportSize({ width: 1280, height: 900 });
    console.log(
      "PASS circuit, worker, controls, numerical table, theme, mobile:",
      base || "/",
    );
  }
  assert.ok(!requests.some((u) => u.includes("step-worker-browser")));
  await page.goto("http://127.0.0.1:4178/_embed/maths-demo/");
  await page.locator(".jxgbox svg").waitFor();
  console.log("PASS standalone JSXGraph");
  assert.deepEqual(
    errors.filter(
      (message) => !message.includes("CanvasRenderer is not yet implemented"),
    ),
    [],
  );
  console.log("PASS no browser runtime errors");
} finally {
  await browser.close();
  server.close();
}
