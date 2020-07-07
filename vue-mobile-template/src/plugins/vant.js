import Vue from "vue";
import {
  Button,
  Loading,
  Toast,
  Form,
  Field,
  Grid,
  GridItem,
  Icon
} from "vant";
Vue.use(Button);
Vue.use(Loading);
Vue.use(Form);
Vue.use(Field);
Vue.use(Grid);
Vue.use(GridItem);
Vue.use(Icon);
Vue.prototype.$loading = Loading;
Vue.prototype.$toast = Toast;
