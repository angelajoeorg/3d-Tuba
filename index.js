import Layout from './components/Layout.js'
import Scene from './components/Scene.js'
import Box from './components/Box.js'
import Wall from './components/Wall.js'
import Floor from './components/Floor.js'
import Ceiling from './components/Ceiling.js'
import aatrium from './components/aatrium.js'
new Vue({
    el: '#app',
    components: { Layout, Scene, Box, Wall, Floor, Ceiling, aatrium },
    template: `
    <Layout>
      <Scene>
        <template v-slot:assets>
          <a-assets>
            <a-asset-item id="chandelier" src="./assets/models/luhter1.obj"></a-asset-item>

            <a-asset-item id="nunnu" src="./assets/models/nunnu.obj"></a-asset-item>
            

          </a-assets>
        </template>

        <a-camera position="0 1.8 10" tilt-turn twoway-motion></a-camera>
           
        <a-entity class="nunnu" rotation="0 180 0" material="side: double; color:red" scale="0.2 0.2 0.2" position="1.05 2.8 0"  obj-model="obj:#nunnu"></a-entity>

        <Ceiling position="0 4 0">
      
        <a-entity material="color:rgba(255,255,255,0.3); emissive: #faf9ff; emissiveIntensity: 1" class="chandelier" position="0 -0.70 0" scale="0.001 0.001 0.001" obj-model="obj: #chandelier"></a-entity>
          <a-entity light="type: point; intensity: 0.6; color: #faf9ff; castShadow: true " position="0 -0.7 0" ></a-entity>
          <a-entity light="type: ambient; intensity: 0.1; color: #faf9ff "></a-entity>  
        </Ceiling>
        <!-- <Wall position="0 0 -5"/> -->
        <!-- <Wall position="-5 0 0" rotation="0 90 0"/> -->
        <aatrium position="-0.7 0 -0.45" rotation="0 -90 0"/>
        <aatrium position="0 0 -1.2" rotation="0 0 0"/>
        <aatrium position="0.7 0 -0.45" rotation="0 90 0"/>
        <!-- <aatrium position="1.2 0 0.06" rotation="0 0 0"/> -->

      	<Wall position="5 0 0" rotation="0 -90 0"/>
        <a-plane 
              position="-4 2 -5"
              scale="2 4 0"
              material="src: ./assets/images/sininevaas.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane 
              position="-4.9 2.5 3" rotation="0 90 0"
              scale="2 1 0"
              material="src: ./assets/images/muna2.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane 
              position="-4.9 1.5 3" rotation="0 90 0"
              scale="2 1 0"
              material="src: ./assets/images/muna3.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane 
              position="-4.9 1.5 1" rotation="0 90 0"
              scale="2 1 0"
              material="src: ./assets/images/muna4.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane 
              position="-4.9 2.5 1" rotation="0 90 0"
              scale="2 1 0"
              material="src: ./assets/images/muna5.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane 
              position="4.9 2.5 1" rotation="0 -90 0"
              scale="2 1 0"
              material="src: ./assets/images/muna6.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane 
              position="4.9 2.5 3" rotation="0 -90 0"
              scale="2 1 0"
              material="src: ./assets/images/muna7.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane 
              position="4.9 1.5 3" rotation="0 -90 0"
              scale="2 1 0"
              material="src: ./assets/images/muna8.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane 
              position="4.9 1.5 1" rotation="0 -90 0"
              scale="2 1 0"
              material="src: ./assets/images/muna9.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane 
              position="4.9 2 -4" rotation="0 -90 0"
              scale="2 4 0"
              material="src: ./assets/images/vaas.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
          <a-plane 
              position="-4.9 2 -4" rotation="0 90 0"
              scale="2 4 0"
              material="src: ./assets/images/oun.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
        <Wall position="-5 0 0.01" rotation="0 90 0"/>
        <a-plane 
              position="4 2 -5"
              scale="2 4 0"
              material="src: ./assets/images/tulbid.jpg"
              class="hover"
              event-set__enter="_event: mouseenter; _target: #plakatitekst; visible: true"
              event-set__leave="_event: mouseleave; _target: #plakatitekst; visible: false"
          ></a-plane>
        <Box position="0 1 0" shadow="cast:true"/>
        <Floor/>
          <floor position="0 0.01 0"/>
        <Floor />
        <a-entity environment="preset: default; groundTexture: walkernoise; groundColor: #3A7036; groundColor2:#7DCC78 ;
         grid: cross; dressing:trees; dressingAmount:10; dressingColor:#3C7005; dressingScale:30; dressingUniformScale:false;
         skyType:gradient; skyColor:#190000;
         
         
         "></a-entity>
      </Scene>
    </Layout>
    `,
})