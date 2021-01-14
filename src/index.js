import Edit from './edit/index.vue';
import info from './info';
import Toolbar from './edit/Toolbar.vue';

const initState = () => ({ fileName: null, videoId: null, playable: false });

export { Edit, Toolbar };

export default {
  ...info,
  initState,
  components: { Edit, Toolbar },
  ui: {
    icon: 'mdi-video',
    forceFullWidth: true
  }
};
