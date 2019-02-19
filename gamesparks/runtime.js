// ECMAScript 5 strict mode
"use strict";

assert2(cr, "cr namespace not created");
assert2(cr.plugins_, "cr.plugins_ not created");

/////////////////////////////////////
// Plugin class
// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
//          vvvvvvvv
cr.plugins_.GameSparks = function(runtime)
{
	this.runtime = runtime;
};

(function ()
{
	/////////////////////////////////////
	// *** CHANGE THE PLUGIN ID HERE *** - must match the "id" property in edittime.js
	//                            vvvvvvvv
	var pluginProto = cr.plugins_.GameSparks.prototype;
		
	/////////////////////////////////////
	// Object type class
	pluginProto.Type = function(plugin)
	{
		this.plugin = plugin;
		this.runtime = plugin.runtime;
	};

	var typeProto = pluginProto.Type.prototype;

	// called on startup for each object type
	typeProto.onCreate = function()
	{
	};

	/////////////////////////////////////
	// Instance class
	pluginProto.Instance = function(type)
	{
		this.type = type;
		this.runtime = type.runtime;
		
		// any other properties you need, e.g...
		// this.myValue = 0;
	};
	
	var instanceProto = pluginProto.Instance.prototype;

	// called whenever an instance is created
	instanceProto.onCreate = function()
	{
		// note the object is sealed after this call; ensure any properties you'll ever need are set on the object
		// e.g...
		// this.myValue = 0;
		
		this.gamesparks = new GameSparks();
		
		this.apiKey = this.properties[0];
		
		this.lastMessage = ""
		
		var apiSecret = this.properties[1];
		
		this.onNonce = function(nonce) {
			return CryptoJS.enc.Base64.stringify(CryptoJS.HmacSHA256(nonce, apiSecret));
		}
	
		var runtime = this.runtime;
		var currInstance = this;
		var gamesparks = this.gamesparks;
		
		this.onInit = function() {
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnInit, currInstance);
		}
		
		this.onMessage = function(message) {
			currInstance.lastMessage = JSON.stringify(message);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnMessage, currInstance);
		}
		
		this.onCustomResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnCustomResponse, currInstance);
		}
		
		this.onAuthenticationResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnAuthenticationResponse, currInstance);
		}
		
		this.onLogEventResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnLogEventResponse, currInstance);
		}
		
		this.onAcceptChallengeResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnAcceptChallengeResponse, currInstance);
		}
		
		this.onAccountDetailsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnAccountDetailsResponse, currInstance);
		}
		
		this.onAnalyticsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnAnalyticsResponse, currInstance);
		}
		
		this.onAroundMeLeaderboardResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnAroundMeLeaderboardResponse, currInstance);
		}
		
		this.onBuyVirtualGoodsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnBuyVirtualGoodsResponse, currInstance);
		}
		
		this.onChangeUserDetailsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnChangeUserDetailsResponse, currInstance);
		}
		
		this.onChatOnChallengeResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnChatOnChallengeResponse, currInstance);
		}
		
		this.onConsumeVirtualGoodResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnConsumeVirtualGoodResponse, currInstance);
		}
		
		this.onCreateChallengeResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnCreateChallengeResponse, currInstance);
		}
		
		this.onDeclineChallengeResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnDeclineChallengeResponse, currInstance);
		}
		
		this.onDeviceAuthenticationResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnDeviceAuthenticationResponse, currInstance);
		}
		
		this.onDismissMessageResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnDismissMessageResponse, currInstance);
		}
		
		this.onEndSessionResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnEndSessionResponse, currInstance);
		}
		
		this.onFacebookConnectResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnFacebookConnectResponse, currInstance);
		}
		
		this.onFindChallengeResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnFindChallengeResponse, currInstance);
		}
		
		this.onGetChallengeResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnGetChallengeResponse, currInstance);
		}
		
		this.onGetDownloadableResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnGetDownloadableResponse, currInstance);
		}
		
		this.onGetMessageResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnGetMessageResponse, currInstance);
		}
		
		this.onGetRunningTotalsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnGetRunningTotalsResponse, currInstance);
		}
		
		this.onGetUploadUrlResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnGetUploadUrlResponse, currInstance);
		}
		
		this.onGetUploadedResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnGetUploadedResponse, currInstance);
		}
		
		this.onGooglePlayBuyGoodsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnGooglePlayBuyGoodsResponse, currInstance);
		}
		
		this.oniOSBuyGoodsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OniOSBuyGoodsResponse, currInstance);
		}
		
		this.onJoinChallengeResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnJoinChallengeResponse, currInstance);
		}
		
		this.onLeaderboardDataResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnLeaderboardDataResponse, currInstance);
		}
		
		this.onListAchievementsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnListAchievementsResponse, currInstance);
		}
		
		this.onListChallengeResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnListChallengeResponse, currInstance);
		}
		
		this.onListChallengeTypeResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnListChallengeTypeResponse, currInstance);
		}
		
		this.onListGameFriendsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnListGameFriendsResponse, currInstance);
		}
		
		this.onListInviteFriendsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnListInviteFriendsResponse, currInstance);
		}
		
		this.onListLeaderboardsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnListLeaderboardsResponse, currInstance);
		}
		
		this.onListMessageResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnListMessageResponse, currInstance);
		}
		
		this.onListMessageSummaryResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnListMessageSummaryResponse, currInstance);
		}
		
		this.onListVirtualGoodsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnListVirtualGoodsResponse, currInstance);
		}
		
		this.onLogChallengeEventResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnLogChallengeEventResponse, currInstance);
		}
		
		this.onPushRegistrationResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnPushRegistrationResponse, currInstance);
		}
		
		this.onRegistrationResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnRegistrationResponse, currInstance);
		}
		
		this.onSendFriendMessageResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnSendFriendMessageResponse, currInstance);
		}
		
		this.onSocialLeaderboardDataResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnSocialLeaderboardDataResponse, currInstance);
		}
		
		this.onTwitterConnectResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnTwitterConnectResponse, currInstance);
		}
		
		this.onWindowsBuyGoodsResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnWindowsBuyGoodsResponse, currInstance);
		}
		
		this.onWithdrawChallengeResponse = function(response) {
			currInstance.lastResponse = JSON.stringify(response);
			
			runtime.trigger(cr.plugins_.GameSparks.prototype.cnds.OnWithdrawChallengeResponse, currInstance);
		}
	};
	
	// called whenever an instance is destroyed
	// note the runtime may keep the object after this call for recycling; be sure
	// to release/recycle/reset any references to other objects in this function.
	instanceProto.onDestroy = function ()
	{
	};
	
	// called when saving the full state of the game
	instanceProto.saveToJSON = function ()
	{
		// return a Javascript object containing information about your object's state
		// note you MUST use double-quote syntax (e.g. "property": value) to prevent
		// Closure Compiler renaming and breaking the save format
		return {
			// e.g.
			//"myValue": this.myValue
		};
	};
	
	// called when loading the full state of the game
	instanceProto.loadFromJSON = function (o)
	{
		// load from the state previously saved by saveToJSON
		// 'o' provides the same object that you saved, e.g.
		// this.myValue = o["myValue"];
		// note you MUST use double-quote syntax (e.g. o["property"]) to prevent
		// Closure Compiler renaming and breaking the save format
	};
	
	// only called if a layout object - draw to a canvas 2D context
	instanceProto.draw = function(ctx)
	{
	};
	
	// only called if a layout object in WebGL mode - draw to the WebGL context
	// 'glw' is not a WebGL context, it's a wrapper - you can find its methods in GLWrap.js in the install
	// directory or just copy what other plugins do.
	instanceProto.drawGL = function (glw)
	{
	};
	
	// The comments around these functions ensure they are removed when exporting, since the
	// debugger code is no longer relevant after publishing.
	/**BEGIN-PREVIEWONLY**/
	instanceProto.getDebuggerValues = function (propsections)
	{
		// Append to propsections any debugger sections you want to appear.
		// Each section is an object with two members: "title" and "properties".
		// "properties" is an array of individual debugger properties to display
		// with their name and value, and some other optional settings.
		propsections.push({
			"title": "My debugger section",
			"properties": [
				// Each property entry can use the following values:
				// "name" (required): name of the property (must be unique within this section)
				// "value" (required): a boolean, number or string for the value
				// "html" (optional, default false): set to true to interpret the name and value
				//									 as HTML strings rather than simple plain text
				// "readonly" (optional, default false): set to true to disable editing the property
				
				// Example:
				// {"name": "My property", "value": this.myValue}
			]
		});
	};
	
	instanceProto.onDebugValueEdited = function (header, name, value)
	{
		// Called when a non-readonly property has been edited in the debugger. Usually you only
		// will need 'name' (the property name) and 'value', but you can also use 'header' (the
		// header title for the section) to distinguish properties with the same name.
		if (name === "My property")
			this.myProperty = value;
	};
	/**END-PREVIEWONLY**/

	//////////////////////////////////////
	// Conditions
	function Cnds() {};

	Cnds.prototype.OnInit = function () { return true; };
	Cnds.prototype.OnMessage = function () { return true; };
	Cnds.prototype.OnCustomResponse = function () { return true; };
	Cnds.prototype.OnAuthenticationResponse = function () { return true; };
	Cnds.prototype.OnLogEventResponse = function () { return true; };
	Cnds.prototype.OnAcceptChallengeResponse = function () { return true; };
	Cnds.prototype.OnAccountDetailsResponse = function () { return true; };
	Cnds.prototype.OnAnalyticsResponse = function () { return true; };
	Cnds.prototype.OnAroundMeLeaderboardResponse = function () { return true; };
	Cnds.prototype.OnBuyVirtualGoodsResponse = function () { return true; };
	Cnds.prototype.OnChangeUserDetailsResponse = function () { return true; };
	Cnds.prototype.OnChatOnChallengeResponse = function () { return true; };
	Cnds.prototype.OnConsumeVirtualGoodResponse = function () { return true; };
	Cnds.prototype.OnCreateChallengeResponse = function () { return true; };
	Cnds.prototype.OnDeclineChallengeResponse = function () { return true; };
	Cnds.prototype.OnDeviceAuthenticationResponse = function () { return true; };
	Cnds.prototype.nDismissMessageResponse = function () { return true; };
	Cnds.prototype.OnEndSessionResponse = function () { return true; };
	Cnds.prototype.OnFacebookConnectResponse = function () { return true; };
	Cnds.prototype.OnFindChallengeResponse = function () { return true; };
	Cnds.prototype.OnGetChallengeResponse = function () { return true; };
	Cnds.prototype.OnGetDownloadableResponse = function () { return true; };
	Cnds.prototype.OnGetMessageResponse = function () { return true; };
	Cnds.prototype.OnGetRunningTotalsResponse = function () { return true; };
	Cnds.prototype.OnGetUploadUrlResponse = function () { return true; };
	Cnds.prototype.OnGetUploadedResponse = function () { return true; };
	Cnds.prototype.OnGooglePlayBuyGoodsResponse = function () { return true; };
	Cnds.prototype.OniOSBuyGoodsResponse = function () { return true; };
	Cnds.prototype.OnJoinChallengeResponse = function () { return true; };
	Cnds.prototype.OnLeaderboardDataResponse = function () { return true; };
	Cnds.prototype.OnListAchievementsResponse = function () { return true; };
	Cnds.prototype.OnListChallengeResponse = function () { return true; };
	Cnds.prototype.OnListChallengeTypeResponse = function () { return true; };
	Cnds.prototype.OnListGameFriendsResponse = function () { return true; };
	Cnds.prototype.OnListInviteFriendsResponse = function () { return true; };
	Cnds.prototype.OnListLeaderboardsResponse = function () { return true; };
	Cnds.prototype.OnListMessageResponse = function () { return true; };
	Cnds.prototype.OnListMessageSummaryResponse = function () { return true; };
	Cnds.prototype.OnListVirtualGoodsResponse = function () { return true; };
	Cnds.prototype.OnLogChallengeEventResponse = function () { return true; };
	Cnds.prototype.OnPushRegistrationResponse = function () { return true; };
	Cnds.prototype.OnRegistrationResponse = function () { return true; };
	Cnds.prototype.OnSendFriendMessageResponse = function () { return true; };
	Cnds.prototype.OnSocialLeaderboardDataResponse = function () { return true; };
	Cnds.prototype.OnTwitterConnectResponse = function () { return true; };
	Cnds.prototype.OnWindowsBuyGoodsResponse = function () { return true; };
	Cnds.prototype.OnWithdrawChallengeResponse = function () { return true; };
	
	pluginProto.cnds = new Cnds();
	
	//////////////////////////////////////
	// Actions
	function Acts() {};

	Acts.prototype.InitPreview = function ()
	{
		this.gamesparks.initPreview({
			key: this.apiKey, 
			onNonce: this.onNonce,
			onInit: this.onInit,
			onMessage: this.onMessage,
		});
	};
	
	Acts.prototype.InitLive = function ()
	{
		this.gamesparks.initLive({
			key: this.apiKey, 
			onNonce: this.onNonce,
			onInit: this.onInit,
			onMessage: this.onMessage,
		});
	};
	
	Acts.prototype.SendWithData = function(requestType, json)
	{
		this.gamesparks.sendWithData(requestType, JSON.parse(json), this.onCustomResponse);
	};
	
	Acts.prototype.AuthenticationRequest = function(username, pass)
	{
		this.gamesparks.authenticationRequest(pass, username, this.onAuthenticationResponse);
	};
	
	Acts.prototype.LogEventRequest = function(eventKey)
	{
		this.gamesparks.logEventRequest(eventKey, this.onLogEventResponse);
	};
	
	Acts.prototype.AcceptChallengeRequest = function(challengeInstanceId, message)
	{
		this.gamesparks.acceptChallengeRequest(challengeInstanceId, message, this.onAcceptChallengeResponse);
	};

	Acts.prototype.AccountDetailsRequest = function()
	{
		this.gamesparks.accountDetailsRequest(this.onAccountDetailsResponse);
	};

	Acts.prototype.AnalyticsRequest = function(data, end, key, start)
	{
		this.gamesparks.analyticsRequest(data, end, key, start, this.onAnalyticsResponse);
	};

	Acts.prototype.AroundMeLeaderboardRequest = function(count, friendIds, leaderboardShortCode, social)
	{
		this.gamesparks.aroundMeLeaderboardRequest(count, friendIds, leaderboardShortCode, social, this.onAroundMeLeaderboardResponse);
	};

	Acts.prototype.BuyVirtualGoodsRequest = function(currencyType, quantity, shortCode)
	{
		this.gamesparks.buyVirtualGoodsRequest(currencyType, quantity, shortCode, this.onBuyVirtualGoodsResponse);
	};

	Acts.prototype.ChangeUserDetailsRequest = function(displayName)
	{
		this.gamesparks.changeUserDetailsRequest(displayName, this.onChangeUserDetailsResponse);
	};

	Acts.prototype.ChatOnChallengeRequest = function(challengeInstanceId, message)
	{
		this.gamesparks.chatOnChallengeRequest(challengeInstanceId, message, this.onChatOnChallengeResponse);
	};

	Acts.prototype.ConsumeVirtualGoodRequest = function(quantity, shortCode)
	{
		this.gamesparks.consumeVirtualGoodRequest(quantity, shortCode, this.onConsumeVirtualGoodResponse);
	};

	Acts.prototype.CreateChallengeRequest = function(accessType, challengeMessage, challengeShortCode, currency1Wager, currency2Wager, currency3Wager, currency4Wager, currency5Wager, currency6Wager, endTime, expiryTime, maxAttempts, maxPlayers, minPlayers, silent, startTime, usersToChallenge)
	{
		this.gamesparks.createChallengeRequest(accessType, challengeMessage, challengeShortCode, currency1Wager, currency2Wager, currency3Wager, currency4Wager, currency5Wager, currency6Wager, endTime, expiryTime, maxAttempts, maxPlayers, minPlayers, silent, startTime, usersToChallenge, this.onCreateChallengeResponse);
	};

	Acts.prototype.DeclineChallengeRequest = function(challengeInstanceId, message)
	{
		this.gamesparks.declineChallengeRequest(challengeInstanceId, message, this.onDeclineChallengeResponse);
	};

	Acts.prototype.DeviceAuthenticationRequest = function(deviceId, deviceModel, deviceName, deviceOS, deviceType, operatingSystem)
	{
		this.gamesparks.deviceAuthenticationRequest(deviceId, deviceModel, deviceName, deviceOS, deviceType, operatingSystem, this.onDeviceAuthenticationResponse);
	};

	Acts.prototype.DismissMessageRequest = function(messageId)
	{
		this.gamesparks.dismissMessageRequest(messageId, this.onDismissMessageResponse);
	};

	Acts.prototype.EndSessionRequest = function()
	{
		this.gamesparks.endSessionRequest(this.onEndSessionResponse);
	};

	Acts.prototype.FacebookConnectRequest = function(accessToken, code)
	{
		this.gamesparks.facebookConnectRequest(accessToken, code, this.onFacebookConnectResponse);
	};

	Acts.prototype.FindChallengeRequest = function(accessType, count, offset)
	{
		this.gamesparks.findChallengeRequest(accessType, count, offset, this.onFindChallengeResponse);
	};

	Acts.prototype.GetChallengeRequest = function(challengeInstanceId, message)
	{
		this.gamesparks.getChallengeRequest(challengeInstanceId, message, this.onGetChallengeResponse);
	};

	Acts.prototype.GetDownloadableRequest = function(shortCode)
	{
		this.gamesparks.getDownloadableRequest(shortCode, this.onGetDownloadableResponse);
	};

	Acts.prototype.GetMessageRequest = function(messageId)
	{
		this.gamesparks.getMessageRequest(messageId, this.onGetMessageResponse);
	};

	Acts.prototype.GetRunningTotalsRequest = function(friendIds, shortCode)
	{
		this.gamesparks.getRunningTotalsRequest(friendIds, shortCode, this.onGetRunningTotalsResponse);
	};

	Acts.prototype.GetUploadUrlRequest = function(uploadData)
	{
		this.gamesparks.getUploadUrlRequest(uploadData, this.onGetUploadUrlResponse);
	};

	Acts.prototype.GetUploadedRequest = function(uploadId)
	{
		this.gamesparks.getUploadedRequest(uploadId, this.onGetUploadedResponse);
	};

	Acts.prototype.GooglePlayBuyGoodsRequest = function(currencyCode, signature, signedData, subUnitPrice)
	{
		this.gamesparks.googlePlayBuyGoodsRequest(currencyCode, signature, signedData, subUnitPrice, this.onGooglePlayBuyGoodsResponse);
	};

	Acts.prototype.iOSBuyGoodsRequest = function(currencyCode, receipt, sandbox, subUnitPrice)
	{
		this.gamesparks.iOSBuyGoodsRequest(currencyCode, receipt, sandbox, subUnitPrice, this.oniOSBuyGoodsResponse);
	};

	Acts.prototype.JoinChallengeRequest = function(challengeInstanceId, message)
	{
		this.gamesparks.joinChallengeRequest(challengeInstanceId, message, this.onJoinChallengeResponse);
	};

	Acts.prototype.LeaderboardDataRequest = function(challengeInstanceId, entryCount, friendIds, leaderboardShortCode, offset, social)
	{
		this.gamesparks.leaderboardDataRequest(challengeInstanceId, entryCount, friendIds, leaderboardShortCode, offset, social, this.onLeaderboardDataResponse);
	};

	Acts.prototype.ListAchievementsRequest = function()
	{
		this.gamesparks.listAchievementsRequest(this.onListAchievementsResponse);
	};

	Acts.prototype.ListChallengeRequest = function(entryCount, offset, shortCode, state)
	{
		this.gamesparks.listChallengeRequest(entryCount, offset, shortCode, state, this.onListChallengeResponse);
	};

	Acts.prototype.ListChallengeTypeRequest = function()
	{
		this.gamesparks.listChallengeTypeRequest(this.onListChallengeTypeResponse);
	};

	Acts.prototype.ListGameFriendsRequest = function()
	{
		this.gamesparks.listGameFriendsRequest(this.onListGameFriendsResponse);
	};

	Acts.prototype.ListInviteFriendsRequest = function()
	{
		this.gamesparks.listInviteFriendsRequest(this.onListInviteFriendsResponse);
	};

	Acts.prototype.ListLeaderboardsRequest = function()
	{
		this.gamesparks.listLeaderboardsRequest(this.onListLeaderboardsResponse);
	};

	Acts.prototype.ListMessageRequest = function(entryCount, offset)
	{
		this.gamesparks.listMessageRequest(entryCount, offset, this.onListMessageResponse);
	};

	Acts.prototype.ListMessageSummaryRequest = function(entryCount, offset)
	{
		this.gamesparks.listMessageSummaryRequest(entryCount, offset, this.onListMessageSummaryResponse);
	};

	Acts.prototype.ListVirtualGoodsRequest = function()
	{
		this.gamesparks.listVirtualGoodsRequest(this.onListVirtualGoodsResponse);
	};

	Acts.prototype.LogChallengeEventRequest = function(challengeInstanceId, eventKey)
	{
		this.gamesparks.logChallengeEventRequest(challengeInstanceId, eventKey, this.onLogChallengeEventResponse);
	};

	Acts.prototype.PushRegistrationRequest = function(deviceOS, pushId)
	{
		this.gamesparks.pushRegistrationRequest(deviceOS, pushId, this.onPushRegistrationResponse);
	};

	Acts.prototype.RegistrationRequest = function(displayName, pass, username)
	{
		this.gamesparks.registrationRequest(displayName, pass, username, this.onRegistrationResponse);
	};

	Acts.prototype.SendFriendMessageRequest = function(friendIds, message)
	{
		this.gamesparks.sendFriendMessageRequest(friendIds, message, this.onSendFriendMessageResponse);
	};

	Acts.prototype.SocialLeaderboardDataRequest = function(challengeInstanceId, entryCount, friendIds, leaderboardShortCode, offset, social)
	{
		this.gamesparks.socialLeaderboardDataRequest(challengeInstanceId, entryCount, friendIds, leaderboardShortCode, offset, social, this.onSocialLeaderboardDataResponse);
	};

	Acts.prototype.TwitterConnectRequest = function(accessSecret, accessToken)
	{
		this.gamesparks.twitterConnectRequest(accessSecret, accessToken, this.onTwitterConnectResponse);
	};

	Acts.prototype.WindowsBuyGoodsRequest = function(currencyCode, receipt, subUnitPrice)
	{
		this.gamesparks.windowsBuyGoodsRequest(currencyCode, receipt, subUnitPrice, this.onWindowsBuyGoodsResponse);
	};

	Acts.prototype.WithdrawChallengeRequest = function(challengeInstanceId, message)
	{
		this.gamesparks.withdrawChallengeRequest(challengeInstanceId, message, this.onWithdrawChallengeResponse);
	};
	
	pluginProto.acts = new Acts();
	
	//////////////////////////////////////
	// Expressions
	function Exps() {};
	
	Exps.prototype.GetLastMessage = function (ret)	
	{
		ret.set_string(this.lastMessage);
	};
	
	Exps.prototype.GetLastResponse = function (ret)
	{
		ret.set_string(this.lastResponse);
	};
	
	pluginProto.exps = new Exps();

}());