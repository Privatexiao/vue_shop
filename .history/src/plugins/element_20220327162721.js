import Vue from 'vue'
import { Button } from 'element-ui'

import { Form, FormItem} from 'element-ui'
import { Input } from 'element-ui'
import { Message } from 'element-ui'


Vue.use(Button)
Vue.use(Form)
Vue.use(FormItem)
Vue.use(Input)

// 在Vue中使用ElementUI中的Message组件时，页面刷新之后会提示一个空的消息框解决办法
// 找到问题原因：由于在按需引入时，
// 使用Vue.use(Message)组件这样在每次刷新时就会弹出一个空白的消息提示框。

// 解决问题：
// 将Vue.use改为 Vue.component(Message)即可。
// 或者直接不用Vue.component()。只需进行引入和挂载即可。
Vue.component(Message)//这句话目前可以不用
Vue.prototype.$message = Message
