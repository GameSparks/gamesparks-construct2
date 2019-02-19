function GetPluginSettings()
{
	return {
		"name":			"GameSparks",				// as appears in 'insert object' dialog, can be changed as long as "id" stays the same
		"id":			"GameSparks",				// this is used to identify this plugin and is saved to the project; never change it
		"version":		"0.9",					// (float in x.y format) Plugin version - C2 shows compatibility warnings based on this
		"description":	"GameSparks is a cloud based platform that provides developers with the tools they need to build all of the server-side components of their games and then manage them as a service post launch. Using GameSparks, developers are able to slash the cost of backend development and ongoing maintenance, freeing up valuable resources.",
		"author":		"GameSparks",
		"help url":		"https://www.gamesparks.com/",
		"category":		"General",				// Prefer to re-use existing categories, but you can set anything here
		"type":			"object",				// either "world" (appears in layout and is drawn), else "object"
		"rotatable":	false,					// only used when "type" is "world".  Enables an angle property on the object.
		"flags":		0						// uncomment lines to enable flags...
						| pf_singleglobal,		// exists project-wide, e.g. mouse, keyboard.  "type" must be "object".
					//	| pf_texture			// object has a single texture (e.g. tiled background)
					//	| pf_position_aces		// compare/set/get x, y...
					//	| pf_size_aces			// compare/set/get width, height...
					//	| pf_angle_aces			// compare/set/get angle (recommended that "rotatable" be set to true)
					//	| pf_appearance_aces	// compare/set/get visible, opacity...
					//	| pf_tiling				// adjusts image editor features to better suit tiled images (e.g. tiled background)
					//	| pf_animations			// enables the animations system.  See 'Sprite' for usage
					//	| pf_zorder_aces		// move to top, bottom, layer...
					//  | pf_nosize				// prevent resizing in the editor
					//	| pf_effects			// allow WebGL shader effects to be added
					//  | pf_predraw			// set for any plugin which draws and is not a sprite (i.e. does not simply draw
												// a single non-tiling image the size of the object) - required for effects to work properly
		"dependency": 	"gamesparks.js;gamesparks-functions.js;hmac-sha256.js"
	};
};

////////////////////////////////////////
// Parameter types:
// AddNumberParam(label, description [, initial_string = "0"])			// a number
// AddStringParam(label, description [, initial_string = "\"\""])		// a string
// AddAnyTypeParam(label, description [, initial_string = "0"])			// accepts either a number or string
// AddCmpParam(label, description)										// combo with equal, not equal, less, etc.
// AddComboParamOption(text)											// (repeat before "AddComboParam" to add combo items)
// AddComboParam(label, description [, initial_selection = 0])			// a dropdown list parameter
// AddObjectParam(label, description)									// a button to click and pick an object type
// AddLayerParam(label, description)									// accepts either a layer number or name (string)
// AddLayoutParam(label, description)									// a dropdown list with all project layouts
// AddKeybParam(label, description)										// a button to click and press a key (returns a VK)
// AddAnimationParam(label, description)								// a string intended to specify an animation name
// AddAudioFileParam(label, description)								// a dropdown list with all imported project audio files

////////////////////////////////////////
// Conditions

// AddCondition(id,					// any positive integer to uniquely identify this condition
//				flags,				// (see docs) cf_none, cf_trigger, cf_fake_trigger, cf_static, cf_not_invertible,
//									// cf_deprecated, cf_incompatible_with_triggers, cf_looping
//				list_name,			// appears in event wizard list
//				category,			// category in event wizard list
//				display_str,		// as appears in event sheet - use {0}, {1} for parameters and also <b></b>, <i></i>
//				description,		// appears in event wizard dialog when selected
//				script_name);		// corresponding runtime function name
				
AddCondition(0, cf_trigger, "onInit", "General", "On init", "Triggered when the SDK is finished initialising.", "OnInit");
AddCondition(1, cf_trigger, "onMessage", "General", "On message", "Triggered when a message object is sent from the server to the client.", "OnMessage");

AddCondition(2, cf_trigger, "onCustomResponse", "Responses", "On custom response", "Triggered when a custom response is sent to the client.", "OnCustomResponse");
AddCondition(3, cf_trigger, "onAuthenticationResponse", "Responses", "On authentication response", "Triggered when an authentication response is sent to the client.", "OnAuthenticationResponse");
AddCondition(4, cf_trigger, "onLogEventResponse", "Responses", "On log event response", "Triggered when a log event response is sent to the client.", "OnLogEventResponse");
AddCondition(5, cf_trigger, "onAcceptChallengeResponse", "Responses", "On accept challenge response", "Triggered when an accept challenge response is sent to the client.", "OnAcceptChallengeResponse");
AddCondition(6, cf_trigger, "onAccountDetailsResponse", "Responses", "On account details response", "Triggered when an account details response is sent to the client.", "OnAccountDetailsResponse");
AddCondition(7, cf_trigger, "onAnalyticsResponse", "Responses", "On analytics response", "Triggered when an analytics response is sent to the client.", "OnAnalyticsResponse");
AddCondition(8, cf_trigger, "onAroundMeLeaderboardResponse", "Responses", "On around me leaderboard response", "Triggered when an around me leaderboard response is sent to the client.", "OnAroundMeLeaderboardResponse");
AddCondition(9, cf_trigger, "onBuyVirtualGoodsResponse", "Responses", "On buy virtual goods response", "Triggered when a buy virtual goods response is sent to the client.", "OnBuyVirtualGoodsResponse");
AddCondition(10, cf_trigger, "onChangeUserDetailsResponse", "Responses", "On change user details response", "Triggered when a change user details response is sent to the client.", "OnChangeUserDetailsResponse");
AddCondition(11, cf_trigger, "onChatOnChallengeResponse", "Responses", "On chat on challenge response", "Triggered when a chat on challenge response is sent to the client.", "OnChatOnChallengeResponse");
AddCondition(12, cf_trigger, "onConsumeVirtualGoodResponse", "Responses", "On consume virtual good response", "Triggered when a consume virtual good response is sent to the client.", "OnConsumeVirtualGoodResponse");
AddCondition(13, cf_trigger, "onCreateChallengeResponse", "Responses", "On create challenge response", "Triggered when a create challenge response is sent to the client.", "OnCreateChallengeResponse");
AddCondition(14, cf_trigger, "onDeclineChallengeResponse", "Responses", "On decline challenge response", "Triggered when a decline challenge response is sent to the client.", "OnDeclineChallengeResponse");
AddCondition(15, cf_trigger, "onDeviceAuthenticationResponse", "Responses", "On device authentication response", "Triggered when a device authentication response is sent to the client.", "OnDeviceAuthenticationResponse");
AddCondition(16, cf_trigger, "onDismissMessageResponse", "Responses", "On dismiss message response", "Triggered when a dismiss message response is sent to the client.", "OnDismissMessageResponse");
AddCondition(17, cf_trigger, "onEndSessionResponse", "Responses", "On end session response", "Triggered when an end session response is sent to the client.", "OnEndSessionResponse");
AddCondition(18, cf_trigger, "onFacebookConnectResponse", "Responses", "On Facebook connect response", "Triggered when a Facebook connect response is sent to the client.", "OnFacebookConnectResponse");
AddCondition(19, cf_trigger, "onFindChallengeResponse", "Responses", "On find challenge response", "Triggered when a find challenge response is sent to the client.", "OnFindChallengeResponse");
AddCondition(20, cf_trigger, "onGetChallengeResponse", "Responses", "On get challenge response", "Triggered when a get challenge response is sent to the client.", "OnGetChallengeResponse");
AddCondition(21, cf_trigger, "onGetDownloadableResponse", "Responses", "On get downloadable response", "Triggered when a get downloadable response is sent to the client.", "OnGetDownloadableResponse");
AddCondition(22, cf_trigger, "onGetMessageResponse", "Responses", "On get message response", "Triggered when a get message response is sent to the client.", "OnGetMessageResponse");
AddCondition(23, cf_trigger, "onGetRunningTotalsResponse", "Responses", "On get running totals response", "Triggered when a get running totals response is sent to the client.", "OnGetRunningTotalsResponse");
AddCondition(24, cf_trigger, "onGetUploadUrlResponse", "Responses", "On get upload url response", "Triggered when a get upload url response is sent to the client.", "OnGetUploadUrlResponse");
AddCondition(25, cf_trigger, "onGetUploadedResponse", "Responses", "On get uploaded response", "Triggered when a get uploaded response is sent to the client.", "OnGetUploadedResponse");
AddCondition(26, cf_trigger, "onGooglePlayBuyGoodsResponse", "Responses", "On Google Play buy goods response", "Triggered when a Google Play buy goods response is sent to the client.", "OnGooglePlayBuyGoodsResponse");
AddCondition(27, cf_trigger, "oniOSBuyGoodsResponse", "Responses", "On iOS buy goods response", "Triggered when an iOS buy goods response is sent to the client.", "OniOSBuyGoodsResponse");
AddCondition(28, cf_trigger, "onJoinChallengeResponse", "Responses", "On join challenge response", "Triggered when a join challenge response is sent to the client.", "OnJoinChallengeResponse");
AddCondition(29, cf_trigger, "onLeaderboardDataResponse", "Responses", "On leaderboard data response", "Triggered when a leaderboard data response is sent to the client.", "OnLeaderboardDataResponse");
AddCondition(30, cf_trigger, "onListAchievementsResponse", "Responses", "On list achievements response", "Triggered when a list achievements response is sent to the client.", "OnListAchievementsResponse");
AddCondition(31, cf_trigger, "onListChallengeResponse", "Responses", "On list challenge response", "Triggered when a list challenge response is sent to the client.", "OnListChallengeResponse");
AddCondition(32, cf_trigger, "onListChallengeTypeResponse", "Responses", "On list challenge type response", "Triggered when a list challenge type response is sent to the client.", "OnListChallengeTypeResponse");
AddCondition(33, cf_trigger, "onListGameFriendsResponse", "Responses", "On list game friends response", "Triggered when a list game friends response is sent to the client.", "OnListGameFriendsResponse");
AddCondition(34, cf_trigger, "onListInviteFriendsResponse", "Responses", "On list invite friends response", "Triggered when a list invite friends response is sent to the client.", "OnListInviteFriendsResponse");
AddCondition(35, cf_trigger, "onListLeaderboardsResponse", "Responses", "On list leaderboards response", "Triggered when a list leaderboards response is sent to the client.", "OnListLeaderboardsResponse");
AddCondition(36, cf_trigger, "onListMessageResponse", "Responses", "On list message response", "Triggered when a list message response is sent to the client.", "OnListMessageResponse");
AddCondition(37, cf_trigger, "onListMessageSummaryResponse", "Responses", "On list message summary response", "Triggered when a list message summary response is sent to the client.", "OnListMessageSummaryResponse");
AddCondition(38, cf_trigger, "onListVirtualGoodsResponse", "Responses", "On list virtual goods response", "Triggered when a list virtual goods response is sent to the client.", "OnListVirtualGoodsResponse");
AddCondition(39, cf_trigger, "onLogChallengeEventResponse", "Responses", "On log challenge event response", "Triggered when a log challenge event response is sent to the client.", "OnLogChallengeEventResponse");
AddCondition(40, cf_trigger, "onPushRegistrationResponse", "Responses", "On push registration response", "Triggered when a push registration response is sent to the client.", "OnPushRegistrationResponse");
AddCondition(41, cf_trigger, "onRegistrationResponse", "Responses", "On registration response", "Triggered when a registration response is sent to the client.", "OnRegistrationResponse");
AddCondition(42, cf_trigger, "onSendFriendMessageResponse", "Responses", "On send friend message response", "Triggered when a friend message response is sent to the client.", "OnSendFriendMessageResponse");
AddCondition(43, cf_trigger, "onSocialLeaderboardDataResponse", "Responses", "On social leaderboard data response", "Triggered when a social leaderboard data response is sent to the client.", "OnSocialLeaderboardDataResponse");
AddCondition(44, cf_trigger, "onTwitterConnectResponse", "Responses", "On Twitter connect response", "Triggered when a Twitter connect response is sent to the client.", "OnTwitterConnectResponse");
AddCondition(45, cf_trigger, "onWindowsBuyGoodsResponse", "Responses", "On Windows buy goods response", "Triggered when a Windows buy goods response is sent to the client.", "OnWindowsBuyGoodsResponse");
AddCondition(46, cf_trigger, "onWithdrawChallengeResponse", "Responses", "On withdraw challenge response", "Triggered when a withdraw challenge response is sent to the client.", "OnWithdrawChallengeResponse");

////////////////////////////////////////
// Actions

// AddAction(id,				// any positive integer to uniquely identify this action
//			 flags,				// (see docs) af_none, af_deprecated
//			 list_name,			// appears in event wizard list
//			 category,			// category in event wizard list
//			 display_str,		// as appears in event sheet - use {0}, {1} for parameters and also <b></b>, <i></i>
//			 description,		// appears in event wizard dialog when selected
//			 script_name);		// corresponding runtime function name

AddAction(0, af_none, "InitPreview", "Connection", "InitPreview", "Initialise the SDK and connect to the preview server.", "InitPreview");
AddAction(1, af_none, "InitLive", "Connection", "InitLive", "Initialise the SDK and connect to the live server.", "InitLive");

AddStringParam("request", "Enter the request type.");
AddStringParam("data", "Enter the JSON data to be sent.");
AddAction(2, af_none, "SendWithData", "General", "SendWithData  request:{0}  data:{1}", "Send a custom request.", "SendWithData");

AddStringParam("username", "Enter the username.");
AddStringParam("password", "Enter the password.");
AddAction(3, af_none, "AuthenticationRequest", "Requests", "AuthenticationRequest  username:{0}  password:{1}", "Send an authentication request.", "AuthenticationRequest");

AddStringParam("eventKey", "Enter the event key.");
AddAction(4, af_none, "LogEventRequest", "Requests", "LogEventRequest  eventKey:{0}", "Send a log event request.", "LogEventRequest");

AddStringParam("challengeInstanceId", "Enter the challange instance id.");
AddStringParam("message", "Enter the message.");
AddAction(5, af_none, "AcceptChallengeRequest", "Requests", "AcceptChallengeRequest  id:{0}  message:{1}", "Send an accept challenge request.", "AcceptChallengeRequest");

AddAction(6, af_none, "AccountDetailsRequest", "Requests", "AccountDetailsRequest", "Send an account details request.", "AccountDetailsRequest");

AddStringParam("data", "Enter the data.");
AddStringParam("end", "Enter the end.");
AddStringParam("key", "Enter the key.");
AddStringParam("start", "Enter the start.");
AddAction(7, af_none, "AnalyticsRequest", "Requests", "AnalyticsRequest  data:{0}  end:{1}  key:{2}  start:{3}", "Send an analytics request.", "AnalyticsRequest");

AddStringParam("count", "Enter the count.");
AddStringParam("friendIds", "Enter the friend ids.");
AddStringParam("leaderboardShortCode", "Enter the leaderboard short code.");
AddStringParam("social", "Enter the social.");
AddAction(8, af_none, "AroundMeLeaderboardRequest", "Requests", "AroundMeLeaderboardRequest  count:{0}  ids:{1}  shortCode:{2}  social:{3}", "Send an around me leaderboard request.", "AroundMeLeaderboardRequest");

AddStringParam("currencyType", "Enter the currency type.");
AddStringParam("quantity", "Enter the quantity.");
AddStringParam("shortCode", "Enter the short code.");
AddAction(9, af_none, "BuyVirtualGoodsRequest", "Requests", "BuyVirtualGoodsRequest  currency:{0}  quantity:{1}  shortCode:{2}", "Send a buy virtual goods request.", "BuyVirtualGoodsRequest");

AddStringParam("displayName", "Enter the display name.");
AddAction(10, af_none, "ChangeUserDetailsRequest", "Requests", "ChangeUserDetailsRequest  name:{0}", "Send a change user details request.", "ChangeUserDetailsRequest");

AddStringParam("challengeInstanceId", "Enter the challenge instance id.");
AddStringParam("message", "Enter the message.");
AddAction(11, af_none, "ChatOnChallengeRequest", "Requests", "ChatOnChallengeRequest  id:{0}  message:{1}", "Send a chat on challenge request.", "ChatOnChallengeRequest");

AddStringParam("quantity", "Enter the quantity.");
AddStringParam("shortCode", "Enter the short code.");
AddAction(12, af_none, "ConsumeVirtualGoodRequest", "Requests", "ConsumeVirtualGoodRequest  quantity:{0}  shortCode:{1}", "Send a consume virtual good request.", "ConsumeVirtualGoodRequest");

AddStringParam("accessType", "Enter the access type.");
AddStringParam("challengeMessage", "Enter the challenge message.");
AddStringParam("challengeShortCode", "Enter the challenge short code.");
AddStringParam("currency1Wager", "Enter the currency1 wager.");
AddStringParam("currency2Wager", "Enter the currency2 wager.");
AddStringParam("currency3Wager", "Enter the currency3 wager.");
AddStringParam("currency4Wager", "Enter the currency4 wager.");
AddStringParam("currency5Wager", "Enter the currency5 wager.");
AddStringParam("currency6Wager", "Enter the currency6 wager.");
AddStringParam("endTime", "Enter the end time.");
AddStringParam("expiryTime", "Enter the expiry time.");
AddStringParam("maxAttempts", "Enter the max attempts.");
AddStringParam("maxPlayers", "Enter the max players.");
AddStringParam("minPlayers", "Enter the min players.");
AddStringParam("silent", "Enter the silent.");
AddStringParam("startTime", "Enter the start time.");
AddStringParam("usersToChallenge", "Enter the users to challenge.");
AddAction(13, af_none, "CreateChallengeRequest", "Requests", "CreateChallengeRequest  accessType:{0}  message:{1}  shortCode:{2}  currency1:{3}  currency2:{4}  currency3:{5}  currency4:{6}  currency5:{7}  currency6:{8}  endTime:{9}  expiryTime:{10}  maxAttempts:{11}  maxPlayers:{12}  minPlayers:{13}  silent:{14}  startTime:{15}  users:{16}", "Send a create challenge request.", "CreateChallengeRequest");

AddStringParam("challengeInstanceId", "Enter the challenge instance id.");
AddStringParam("message", "Enter the message.");
AddAction(14, af_none, "DeclineChallengeRequest", "Requests", "DeclineChallengeRequest  id:{0}  message:{1}", "Send a decline challenge request.", "DeclineChallengeRequest");

AddStringParam("deviceId", "Enter the device id.");
AddStringParam("deviceModel", "Enter the device model.");
AddStringParam("deviceName", "Enter the device name.");
AddStringParam("deviceOS", "Enter the device OS.");
AddStringParam("deviceType", "Enter the device type.");
AddStringParam("operatingSystem", "Enter the operating system.");
AddAction(15, af_none, "DeviceAuthenticationRequest", "Requests", "DeviceAuthenticationRequest  id:{0}  model:{1}  name:{2}  os:{3}  type:{4}  opSys:{5}", "Send a device authentication request.", "DeviceAuthenticationRequest");

AddStringParam("messageId", "Enter the message id.");
AddAction(16, af_none, "DismissMessageRequest", "Requests", "DismissMessageRequest  id:{0}", "Send a dismiss message request.", "DismissMessageRequest");

AddAction(17, af_none, "EndSessionRequest", "Requests", "EndSessionRequest", "Send an end session request.", "EndSessionRequest");

AddStringParam("accessToken", "Enter the access token.");
AddStringParam("code", "Enter the code.");
AddAction(18, af_none, "FacebookConnectRequest", "Requests", "FacebookConnectRequest  accessToken:{0}  code:{1}", "Send a Facebook connect request.", "FacebookConnectRequest");

AddStringParam("accessType", "Enter the access type.");
AddStringParam("count", "Enter the count.");
AddStringParam("offset", "Enter the offset.");
AddAction(19, af_none, "FindChallengeRequest", "Requests", "FindChallengeRequest  accessType:{0}  count:{1}  offset:{2}", "Send a find challenge request.", "FindChallengeRequest");

AddStringParam("challengeInstanceId", "Enter the challenge instance id.");
AddStringParam("message", "Enter the message.");
AddAction(20, af_none, "GetChallengeRequest", "Requests", "GetChallengeRequest  id:{0}  message:{1}", "Send a get challenge request.", "GetChallengeRequest");

AddStringParam("shortCode", "Enter the short code.");
AddAction(21, af_none, "GetDownloadableRequest", "Requests", "GetDownloadableRequest  shortCode:{0}", "Send a get downloadable request.", "GetDownloadableRequest");

AddStringParam("messageId", "Enter the message id.");
AddAction(22, af_none, "GetMessageRequest", "Requests", "GetMessageRequest  id:{0}", "Send a get message request.", "GetMessageRequest");

AddStringParam("friendIds", "Enter the friend ids.");
AddStringParam("shortCode", "Enter the short code.");
AddAction(23, af_none, "GetRunningTotalsRequest", "Requests", "GetRunningTotalsRequest  ids:{0}  shortCode:{1}", "Send a get running totals request.", "GetRunningTotalsRequest");

AddStringParam("uploadData", "Enter the upload data.");
AddAction(24, af_none, "GetUploadUrlRequest", "Requests", "GetUploadUrlRequest  data:{0}", "Send a get upload url request.", "GetUploadUrlRequest");

AddStringParam("uploadId", "Enter the upload id.");
AddAction(25, af_none, "GetUploadedRequest", "Requests", "GetUploadedRequest  id:{0}", "Send a get uploaded request.", "GetUploadedRequest");

AddStringParam("currencyCode", "Enter the currency code.");
AddStringParam("signature", "Enter the signature.");
AddStringParam("signedData", "Enter the signed data.");
AddStringParam("subUnitPrice", "Enter the sub unit price.");
AddAction(26, af_none, "GooglePlayBuyGoodsRequest", "Requests", "GooglePlayBuyGoodsRequest  currency:{0}  signature:{1}  data:{2}  subUnitPrice:{3}", "Send a Google Play buy goods request.", "GooglePlayBuyGoodsRequest");

AddStringParam("currencyCode", "Enter the currency code.");
AddStringParam("receipt", "Enter the receipt.");
AddStringParam("sandbox", "Enter the sandbox.");
AddStringParam("subUnitPrice", "Enter the sub unit price.");
AddAction(27, af_none, "iOSBuyGoodsRequest", "Requests", "iOSBuyGoodsRequest  currency:{0}  receipt:{1}  sandbox:{2}  subUnitPrice:{3}", "Send an iOS buy goods request.", "iOSBuyGoodsRequest");

AddStringParam("challengeInstanceId", "Enter the challenge instance id.");
AddStringParam("message", "Enter the message.");
AddAction(28, af_none, "JoinChallengeRequest", "Requests", "JoinChallengeRequest  id:{0}  message:{1}", "Send a join challenge request.", "JoinChallengeRequest");

AddStringParam("challengeInstanceId", "Enter the challenge instance id.");
AddStringParam("entryCount", "Enter the entry count.");
AddStringParam("friendIds", "Enter the friend ids.");
AddStringParam("leaderboardShortCode", "Enter the leaderboard short code.");
AddStringParam("offset", "Enter the offset.");
AddStringParam("social", "Enter the social.");
AddAction(29, af_none, "LeaderboardDataRequest", "Requests", "LeaderboardDataRequest  id:{0}  entryCount:{1}  friendIds:{2}  shortCode:{3}  offset:{4}  social:{5}", "Send a leaderboard data request.", "LeaderboardDataRequest");

AddAction(30, af_none, "ListAchievementsRequest", "Requests", "ListAchievementsRequest", "Send a list achievements request.", "ListAchievementsRequest");

AddStringParam("entryCount", "Enter the entry count.");
AddStringParam("offset", "Enter the offset.");
AddStringParam("shortCode", "Enter the short code.");
AddStringParam("state", "Enter the state.");
AddAction(31, af_none, "ListChallengeRequest", "Requests", "ListChallengeRequest  entryCount:{0}  offset:{1}  shortCode:{2}  state:{3}", "Send a list challenge request.", "ListChallengeRequest");

AddAction(32, af_none, "ListChallengeTypeRequest", "Requests", "ListChallengeTypeRequest", "Send a list challenge type request.", "ListChallengeTypeRequest");

AddAction(33, af_none, "ListGameFriendsRequest", "Requests", "ListGameFriendsRequest", "Send a list game friends request.", "ListGameFriendsRequest");

AddAction(34, af_none, "ListInviteFriendsRequest", "Requests", "ListInviteFriendsRequest", "Send a list invite friends request.", "ListInviteFriendsRequest");

AddAction(35, af_none, "ListLeaderboardsRequest", "Requests", "ListLeaderboardsRequest", "Send a list leaderboards request.", "ListLeaderboardsRequest");

AddStringParam("entryCount", "Enter the entry count.");
AddStringParam("offset", "Enter the offset.");
AddAction(36, af_none, "ListMessageRequest", "Requests", "ListMessageRequest  entryCount:{0}  offset:{1}", "Send a list message request.", "ListMessageRequest");

AddStringParam("entryCount", "Enter the entry count.");
AddStringParam("offset", "Enter the offset.");
AddAction(37, af_none, "ListMessageSummaryRequest", "Requests", "ListMessageSummaryRequest  entryCount:{0}  offset:{1}", "Send a list message summary request.", "ListMessageSummaryRequest");

AddAction(38, af_none, "ListVirtualGoodsRequest", "Requests", "ListVirtualGoodsRequest", "Send a list virtual goods request.", "ListVirtualGoodsRequest");

AddStringParam("challengeInstanceId", "Enter the challenge instance id.");
AddStringParam("eventKey", "Enter the event key.");
AddAction(39, af_none, "LogChallengeEventRequest", "Requests", "LogChallengeEventRequest  id:{0}  eventKey:{1}", "Send a log challenge event request.", "LogChallengeEventRequest");

AddStringParam("deviceOS", "Enter the device OS.");
AddStringParam("pushId", "Enter the push id.");
AddAction(40, af_none, "PushRegistrationRequest", "Requests", "PushRegistrationRequest  deviceOS:{0}  id:{1}", "Send a push registration request.", "PushRegistrationRequest");

AddStringParam("displayName", "Enter the display name.");
AddStringParam("password", "Enter the password.");
AddStringParam("username", "Enter the username.");
AddAction(41, af_none, "RegistrationRequest", "Requests", "RegistrationRequest  displayName:{0}  password:{1}  username:{2}", "Send a registration request.", "RegistrationRequest");

AddStringParam("friendIds", "Enter the friend ids.");
AddStringParam("message", "Enter the message.");
AddAction(42, af_none, "SendFriendMessageRequest", "Requests", "SendFriendMessageRequest  ids:{0}  message:{1}", "Send a friend message request.", "SendFriendMessageRequest");

AddStringParam("challengeInstanceId", "Enter the challenge instance id.");
AddStringParam("entryCount", "Enter the entry count.");
AddStringParam("friendIds", "Enter the friend ids.");
AddStringParam("leaderboardShortCode", "Enter the leaderboard short code.");
AddStringParam("offset", "Enter the offset.");
AddStringParam("social", "Enter the social.");
AddAction(43, af_none, "SocialLeaderboardDataRequest", "Requests", "SocialLeaderboardDataRequest  id:{0}  entryCount:{1}  friendIds:{2}  shortCode:{3}  offset:{4}  social:{5}", "Send a social leaderboard data request.", "SocialLeaderboardDataRequest");

AddStringParam("accessSecret", "Enter the access secret.");
AddStringParam("accessToken", "Enter the access token.");
AddAction(44, af_none, "TwitterConnectRequest", "Requests", "TwitterConnectRequest  secret:{0}  token:{1}", "Send a Twitter connect request.", "TwitterConnectRequest");

AddStringParam("currencyCode", "Enter the currency code.");
AddStringParam("receipt", "Enter the receipt.");
AddStringParam("subUnitPrice", "Enter the sub unit price.");
AddAction(45, af_none, "WindowsBuyGoodsRequest", "Requests", "WindowsBuyGoodsRequest  currency:{0}  receipt:{1}  subUnitPrice:{2}", "Send a Windows buy goods request.", "WindowsBuyGoodsRequest");

AddStringParam("challengeInstanceId", "Enter the challenge instance id.");
AddStringParam("message", "Enter the message.");
AddAction(46, af_none, "WithdrawChallengeRequest", "Requests", "WithdrawChallengeRequest  id:{0}  message:{1}", "Send a withdraw challenge request.", "WithdrawChallengeRequest");

////////////////////////////////////////
// Expressions

// AddExpression(id,			// any positive integer to uniquely identify this expression
//				 flags,			// (see docs) ef_none, ef_deprecated, ef_return_number, ef_return_string,
//								// ef_return_any, ef_variadic_parameters (one return flag must be specified)
//				 list_name,		// currently ignored, but set as if appeared in event wizard
//				 category,		// category in expressions panel
//				 exp_name,		// the expression name after the dot, e.g. "foo" for "myobject.foo" - also the runtime function name
//				 description);	// description in expressions panel

AddExpression(0, ef_return_string, "Get last message", "General", "GetLastMessage", "Get last message.");
AddExpression(1, ef_return_string, "Get last response", "General", "GetLastResponse", "Get last response.");

////////////////////////////////////////
ACESDone();

////////////////////////////////////////
// Array of property grid properties for this plugin
// new cr.Property(ept_integer,		name,	initial_value,	description)		// an integer value
// new cr.Property(ept_float,		name,	initial_value,	description)		// a float value
// new cr.Property(ept_text,		name,	initial_value,	description)		// a string
// new cr.Property(ept_color,		name,	initial_value,	description)		// a color dropdown
// new cr.Property(ept_font,		name,	"Arial,-16", 	description)		// a font with the given face name and size
// new cr.Property(ept_combo,		name,	"Item 1",		description, "Item 1|Item 2|Item 3")	// a dropdown list (initial_value is string of initially selected item)
// new cr.Property(ept_link,		name,	link_text,		description, "firstonly")		// has no associated value; simply calls "OnPropertyChanged" on click

var property_list = [
	new cr.Property(ept_text, "apiKey", "", "Your API Key."),
	new cr.Property(ept_text, "apiSecret", "", "Your API Secret.")
	];
	
// Called by IDE when a new object type is to be created
function CreateIDEObjectType()
{
	return new IDEObjectType();
}

// Class representing an object type in the IDE
function IDEObjectType()
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
}

// Called by IDE when a new object instance of this type is to be created
IDEObjectType.prototype.CreateInstance = function(instance)
{
	return new IDEInstance(instance);
}

// Class representing an individual instance of an object in the IDE
function IDEInstance(instance, type)
{
	assert2(this instanceof arguments.callee, "Constructor called as a function");
	
	// Save the constructor parameters
	this.instance = instance;
	this.type = type;
	
	// Set the default property values from the property table
	this.properties = {};
	
	for (var i = 0; i < property_list.length; i++)
		this.properties[property_list[i].name] = property_list[i].initial_value;
		
	// Plugin-specific variables
	// this.myValue = 0...
}

// Called when inserted via Insert Object Dialog for the first time
IDEInstance.prototype.OnInserted = function()
{
}

// Called when double clicked in layout
IDEInstance.prototype.OnDoubleClicked = function()
{
}

// Called after a property has been changed in the properties bar
IDEInstance.prototype.OnPropertyChanged = function(property_name)
{
}

// For rendered objects to load fonts or textures
IDEInstance.prototype.OnRendererInit = function(renderer)
{
}

// Called to draw self in the editor if a layout object
IDEInstance.prototype.Draw = function(renderer)
{
}

// For rendered objects to release fonts or textures
IDEInstance.prototype.OnRendererReleased = function(renderer)
{
}