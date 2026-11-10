// One bridge per document, including Quartz SPA navigation and transclusions.
if (!window.__notesEmbedBridge) {
 window.__notesEmbedBridge = true
 const frames = () => [...document.querySelectorAll('iframe[data-notes-embed]')]
 const send = frame => {
  const style = getComputedStyle(document.documentElement)
  const tokens = Object.fromEntries(['light','lightgray','gray','darkgray','dark','secondary','tertiary','bodyFont'].map(k=>[k,style.getPropertyValue('--'+k)]))
  frame.contentWindow?.postMessage({type:'notes-embed:v1:theme', theme:document.documentElement.getAttribute('saved-theme') || (matchMedia('(prefers-color-scheme:dark)').matches?'dark':'light'),tokens},location.origin)
 }
 const sync = () => frames().forEach(send)
 addEventListener('message',event=>{
  if(event.origin!==location.origin) return
  const frame=frames().find(f=>f.contentWindow===event.source)
  if(!frame) return
  if(event.data?.type==='notes-embed:v1:ready') send(frame)
  if(event.data?.type==='notes-embed:v1:height' && Number.isFinite(event.data.height)) frame.style.height=Math.max(200,Math.min(5000,event.data.height+2))+'px'
 })
 new MutationObserver(sync).observe(document.documentElement,{attributes:true,attributeFilter:['saved-theme']})
 document.addEventListener('nav',sync)
 sync()
}
