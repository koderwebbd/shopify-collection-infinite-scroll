var isSettingsObj = JSON.parse(isSettings);
console.log(isSettingsObj)
var elem = document.querySelector(isSettingsObj.container);
if(isSettingsObj.path.length > 0){
  var infScroll = new InfiniteScroll( elem, {
    path: isSettingsObj.path,
    append: isSettingsObj.append,
    history: false,
    hideNav: isSettingsObj.hideNav,
    status: isSettingsObj.status
  });
  infScroll.on( 'last', function( body, path ) {
    console.log(isSettingsObj.status)
    
    setTimeout(() => {
    document.querySelector(isSettingsObj.status).style = "display:none"
    }, 2000);
  });
}
