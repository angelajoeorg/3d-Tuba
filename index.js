import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/Wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'
new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling },
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
            <a-asset-item id="chandelier" src="./assets/models/luhter1.obj"></a-asset-item>

            <a-asset-item id="nunnu" src="./assets/models/nunnu.obj"></a-asset-item>
            

          </a-assets>
        </template>

        <a-camera position="0 1.8 2" tilt-turn twoway-motion></a-camera>
           
        <a-entity class="nunnu" obj-model="obj:#nunnu"></a-entity>

        <Ceiling position="0 4 0">
      
        <a-entity material="color:rgba(255,255,255,0.3); emissive: #faf9ff; emissiveIntensity: 1" class="chandelier" position="0 -0.70 0" scale="0.001 0.001 0.001" obj-model="obj: #chandelier"></a-entity>
          <a-entity light="type: point; intensity: 0.6; color: #faf9ff; castShadow: true " position="0 -0.7 0" ></a-entity>
          <a-entity light="type: ambient; intensity: 0.1; color: #faf9ff "></a-entity>  
        </Ceiling>
        <!-- <Wall position="0 0 -5"/> -->
      	<!-- <Wall position="-5 0 0" rotation="0 90 0"/> -->
      	<Wall position="5 0 0" rotation="0 -90 0"/>
        <a-plane 
              position="1 2 -5"
              scale="2 4 0"
              material="src: ./assets/images/sininevaas.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
        <Wall position="0 0 5" rotation="0 -180 0"/>
        <a-plane 
              position="4 2 -5"
              scale="2 4 0"
              material="src: ./assets/images/sininevaas.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
        <Box position="1 1 0" shadow="cast:true"/>
        <Floor/>
          <floor position="0 0.01 0"/>
        <Floor />
        <a-entity environment="preset: volcano; groundColor: #100; grid: cross"></a-entity>
      </Scene>
    </Layout>
    `,
})