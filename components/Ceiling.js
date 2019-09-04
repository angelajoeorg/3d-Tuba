export default {
    template: `
    	<a-entity class="ceiling" >
        	<a-plane rotation="90 0 0"  width="10" height="10" material="side: double; color:white; transparent:true; opacity:0.4"></a-plane>
            <slot />
        </a-entity>
    `
}