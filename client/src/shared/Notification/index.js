import {notification} from 'antd'

export default (which, message, description) => {
  notification[which]({ message, description })
}