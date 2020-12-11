import Edit from './edit/index.vue';

/**
 * A method used to create the initial state of the element by declaring the
 * defaults for the elements props. Does not need to be defined.
 */
const initState = () => ({ });

/**
 * The fields that need to be customized are:
 * name: a string that is displayed to a user in the editor
 * ui->icon: a string representing the name of the MDI (https://materialdesignicons.com/)
 * icon that is displayed to the user in the editor
 * ui->forceFullWidth: a boolean value which defines if the element can only be
 * added as full width element
 */
export default {
  name: 'Sprout video',
  type: 'SPROUT_VIDEO',
  version: '1.0',
  initState,
  Edit,
  ui: {
    icon: 'mdi-video',
    forceFullWidth: true
  }
};
