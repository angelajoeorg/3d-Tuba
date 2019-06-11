export default {
    template: `
        <a-scene>
        <a-assets>
      <a-asset-item id="chandelier" src="assets/models/luhter1.obj"></a-asset-item>
       </a-assets>
          <a-entity position="0 0 -4">
            <slot /> 
            <a-sky color="#ECECEC"></a-sky>
          </a-entity>
        </a-scene>
    `
}