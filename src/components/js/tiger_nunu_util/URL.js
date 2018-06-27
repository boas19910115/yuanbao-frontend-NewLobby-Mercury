var webURL = location.hostname;
console.log('webURL : ' + webURL);

var gameWorkName        = '';
var showAD              = false;
var customerServiceLink = '';
var publicLink          = '';
var maintain            = false;

// PS?��?�?
var PSTiger = {
    HostID  : '',
    API     : ''
}

switch(webURL)
{
	case 'www2.8d8dpay.com':
          gameWorkName = '8d8d';
          showAD       =  true;
          maintain     =  false;          
          publicLink   =  'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU3NzAxOTA3OA==&scene=124#wechat_redirect';
          customerServiceLink = 'https://kf1.learnsaas.com/chat/chatClient/chatbox.jsp?companyID=933818&configID=71687&jid=5043740959&operatorId=30319&s=1';
          PSTiger.HostID = '29d9ccbb74befcc7f8f39a7b292af7b8';
          PSTiger.API    = 'https://yb8d8d-api.claretfox.com';

          break;

	case 'lottobao.com':
          gameWorkName = '?��?';
          showAD       =  true;
          maintain     =  false;
          publicLink   =  'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU0ODUxNjY0NA==&scene=124#wechat_redirect';
          customerServiceLink = 'https://kf1.learnsaas.com/chat/chatClient/chatbox.jsp?companyID=933818&configID=71687&jid=5043740959&operatorId=30319&s=1';
          PSTiger.HostID = '67aaa4928f574ff95affec6664889878';
          PSTiger.API    = 'https://ybvenus-api.claretfox.com';

          break;

	case 'ws.myyg168.com':
          gameWorkName = '水�?';
          showAD       =  true;
          maintain     =  false;
          publicLink   =  'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzUzNDU0MjEzMQ==&scene=124#wechat_redirect';
          customerServiceLink = 'https://kf1.learnsaas.com/chat/chatClient/chatbox.jsp?companyID=933818&configID=71687&jid=5043740959&operatorId=30319&s=1';
          PSTiger.HostID = 'ca26f6e0272bb74f6443ed03bee160d7';
          PSTiger.API    = 'https://ybmercury-api.claretfox.com';

          break;

          gameWorkName = '?��?';
          showAD       =  false;
          maintain     =  false;
          publicLink   =  'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzI4MDk3MzQ5OA==&scene=124#wechat_redirect';
          customerServiceLink = '';
          PSTiger.HostID = '015f9b5ed53c05e4c2e9f572551fb21e';
          PSTiger.API    = 'https://yb8d8d-api.claretfox.com';

          break;

 	case 'wvshow.com':
          gameWorkName = '马�?';        
          showAD       =  false;
          maintain     =  false;
          publicLink   =  'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU4MDE1ODA5Mg==&scene=124#wechat_redirect';
          customerServiceLink = '';
          PSTiger.HostID = '5b187eb6037b6a68cc39669baa9a1ac9';
          PSTiger.API    = 'https://ybmary-api.claretfox.com';

          break;  

 	case '100cares.com':
          gameWorkName = '?��?';        
          showAD       =  false;
          maintain     =  false;
          publicLink   =  'https://mp.weixin.qq.com/mp/profile_ext?action=home&__biz=MzU5MTU2NjQzOQ==&scene=124#wechat_redirect';
          PSTiger.HostID = 'c90d5767f0c2cb73c452669a082e1b1f';
          PSTiger.API    = 'https://ybsaturn-api.claretfox.com';

          customerServiceLink = '';
          break;  

	case 'd87b.com':
          gameWorkName = '87';
          showAD       =  false;
          maintain     =  false;
          publicLink   =  '';
          customerServiceLink = '';
          PSTiger.HostID = 'f2c9420c364a6998538de18a9859ede0';
          PSTiger.API    = 'https://yb-api.claretfox.com';
          
          break;                                                   
}

var debug = true;
var dateStr ='20180622';

export {webURL,PSTiger,dateStr};





