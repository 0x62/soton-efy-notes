import { test } from "node:test";
import assert from "node:assert/strict";
import { polar, phasorExtent } from "~/toolkit/phasor";
test("phasor phases cover all quadrants and zero without a fabricated phase", () => {
  for (const [real, imaginary, phase] of [[3,4,53.130102354],[-3,4,126.869897646],[-3,-4,-126.869897646],[3,-4,-53.130102354],[0,5,90],[0,-5,-90],[-5,0,180]]) {
    const p = polar({real, imaginary});
    assert.equal(p.magnitude,5);
    assert.ok(Math.abs(p.degrees! - phase)<1e-8);
  }
  assert.equal(polar({real:0,imaginary:0}).degrees,null);
  for(const factor of [1e-20,1,1e20]) {
    assert.ok(Math.abs(polar({real:3*factor,imaginary:-4*factor}).degrees! +53.130102354)<1e-8);
    assert.ok(Math.abs(phasorExtent([{value:{real:3*factor,imaginary:4*factor}}])/(5*factor)-1)<1e-12);
  }
});
test("bipolar and unipolar RMS differ even with the same peak", () => {
  for (const duty of [0.1,0.5,0.9]) {
    const samples = Array.from({length:1000},(_,i)=>i<1000*duty);
    const rms=(values:number[])=>Math.sqrt(values.reduce((s,x)=>s+x*x,0)/values.length);
    assert.equal(rms(samples.map(high=>high?20:-20)),20);
    assert.ok(Math.abs(rms(samples.map(high=>high?20:0))-20*Math.sqrt(duty))<1e-12);
  }
});
