import IMGroupNotifyMessage from './base'

/**
 * 加群申请被通过 - 申请人接收
 */
export default class IMGroupJoinApprovedNotifyMessage extends IMGroupNotifyMessage {
	messageType() {
		return "IMGroupJoinApprovedNotifyMessage"
	}
	// 操作人 IMUser
	operator = null
}