import Vue from 'vue'
import lang from 'element-ui/lib/locale/lang/en';
import locale from 'element-ui/lib/locale';

import {
    Button,
    ButtonGroup,
    Loading,
    Message,
    MessageBox,
    Icon,
    Row,
    Col,
    Notification,
} from 'element-ui';

Vue.use(Button);
Vue.use(ButtonGroup);
Vue.use(Loading);
Vue.use(Icon);
Vue.use(Row);
Vue.use(Col);


Vue.prototype.$message = Message;
Vue.prototype.$msgbox = MessageBox;
Vue.prototype.$alert = MessageBox.alert;
Vue.prototype.$confirm = MessageBox.confirm;
Vue.prototype.$prompt = MessageBox.prompt;
Vue.prototype.$notify = Notification;

locale.use(lang);