gdjs.Raio_45XCode = {};
gdjs.Raio_45XCode.localVariables = [];
gdjs.Raio_45XCode.GDbackgroundObjects1= [];
gdjs.Raio_45XCode.GDbackgroundObjects2= [];
gdjs.Raio_45XCode.GDPainelObjects1= [];
gdjs.Raio_45XCode.GDPainelObjects2= [];
gdjs.Raio_45XCode.GDbtn_9595nextObjects1= [];
gdjs.Raio_45XCode.GDbtn_9595nextObjects2= [];
gdjs.Raio_45XCode.GDCursorObjects1= [];
gdjs.Raio_45XCode.GDCursorObjects2= [];
gdjs.Raio_45XCode.GDbtn_9595jogarObjects1= [];
gdjs.Raio_45XCode.GDbtn_9595jogarObjects2= [];
gdjs.Raio_45XCode.GDRingObjects1= [];
gdjs.Raio_45XCode.GDRingObjects2= [];
gdjs.Raio_45XCode.GDMagicObjects1= [];
gdjs.Raio_45XCode.GDMagicObjects2= [];
gdjs.Raio_45XCode.GDMagic2Objects1= [];
gdjs.Raio_45XCode.GDMagic2Objects2= [];
gdjs.Raio_45XCode.GDStarSparksObjects1= [];
gdjs.Raio_45XCode.GDStarSparksObjects2= [];
gdjs.Raio_45XCode.GDCaixa_9595AntigosObjects1= [];
gdjs.Raio_45XCode.GDCaixa_9595AntigosObjects2= [];
gdjs.Raio_45XCode.GDCaixa_9595AtuaisObjects1= [];
gdjs.Raio_45XCode.GDCaixa_9595AtuaisObjects2= [];
gdjs.Raio_45XCode.GDMonitorObjects1= [];
gdjs.Raio_45XCode.GDMonitorObjects2= [];
gdjs.Raio_45XCode.GDAcerto2Objects1= [];
gdjs.Raio_45XCode.GDAcerto2Objects2= [];
gdjs.Raio_45XCode.GDAcertoObjects1= [];
gdjs.Raio_45XCode.GDAcertoObjects2= [];


gdjs.Raio_45XCode.asyncCallback12787028 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Raio_45XCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Cena_01", false);
}gdjs.Raio_45XCode.localVariables.length = 0;
}
gdjs.Raio_45XCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Raio_45XCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Raio_45XCode.asyncCallback12787028(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Raio_45XCode.asyncCallback12788268 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Raio_45XCode.localVariables);
gdjs.copyArray(runtimeScene.getObjects("Caixa_Antigos"), gdjs.Raio_45XCode.GDCaixa_9595AntigosObjects2);
gdjs.copyArray(runtimeScene.getObjects("Caixa_Atuais"), gdjs.Raio_45XCode.GDCaixa_9595AtuaisObjects2);
{for(var i = 0, len = gdjs.Raio_45XCode.GDCaixa_9595AntigosObjects2.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDCaixa_9595AntigosObjects2[i].hide();
}
}{for(var i = 0, len = gdjs.Raio_45XCode.GDCaixa_9595AtuaisObjects2.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDCaixa_9595AtuaisObjects2[i].hide();
}
}gdjs.Raio_45XCode.localVariables.length = 0;
}
gdjs.Raio_45XCode.eventsList1 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Raio_45XCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.Raio_45XCode.asyncCallback12788268(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Raio_45XCode.asyncCallback12790124 = function (runtimeScene, asyncObjectsList) {
asyncObjectsList.restoreLocalVariablesContainers(gdjs.Raio_45XCode.localVariables);
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "Final", false);
}gdjs.Raio_45XCode.localVariables.length = 0;
}
gdjs.Raio_45XCode.eventsList2 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
asyncObjectsList.backupLocalVariablesContainers(gdjs.Raio_45XCode.localVariables);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(0.5), (runtimeScene) => (gdjs.Raio_45XCode.asyncCallback12790124(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.Raio_45XCode.eventsList3 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Raio_45XCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.Raio_45XCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDCursorObjects1[i].hide();
}
}}

}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("Ring"), gdjs.Raio_45XCode.GDRingObjects1);
{for(var i = 0, len = gdjs.Raio_45XCode.GDRingObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDRingObjects1[i].rotate(90, runtimeScene);
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = !(gdjs.evtTools.systemInfo.isMobile());
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Cursor"), gdjs.Raio_45XCode.GDCursorObjects1);
{for(var i = 0, len = gdjs.Raio_45XCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDCursorObjects1[i].setPosition(gdjs.evtTools.input.getCursorX(runtimeScene, "", 0),gdjs.evtTools.input.getCursorY(runtimeScene, "", 0));
}
}{gdjs.evtTools.input.hideCursor(runtimeScene);
}{for(var i = 0, len = gdjs.Raio_45XCode.GDCursorObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDCursorObjects1[i].hide(false);
}
}{runtimeScene.getGame().getVariables().getFromIndex(0).setBoolean(false);
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("Ring"), gdjs.Raio_45XCode.GDRingObjects1);
{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\bgm_music.mp3", 2, true, 60, 1);
}{gdjs.evtTools.sound.playSoundOnChannel(runtimeScene, "assets\\portal.mp3", 3, true, 60, 1);
}{for(var i = 0, len = gdjs.Raio_45XCode.GDRingObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDRingObjects1[i].getBehavior("Scale").setScale(0);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_jogar"), gdjs.Raio_45XCode.GDbtn_9595jogarObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Raio_45XCode.GDbtn_9595jogarObjects1.length;i<l;++i) {
    if ( gdjs.Raio_45XCode.GDbtn_9595jogarObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Raio_45XCode.GDbtn_9595jogarObjects1[k] = gdjs.Raio_45XCode.GDbtn_9595jogarObjects1[i];
        ++k;
    }
}
gdjs.Raio_45XCode.GDbtn_9595jogarObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}
{ //Subevents
gdjs.Raio_45XCode.eventsList0(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("Ring"), gdjs.Raio_45XCode.GDRingObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Raio_45XCode.GDRingObjects1.length;i<l;++i) {
    if ( gdjs.Raio_45XCode.GDRingObjects1[i].getBehavior("Scale").getScale() < 0.7 ) {
        isConditionTrue_0 = true;
        gdjs.Raio_45XCode.GDRingObjects1[k] = gdjs.Raio_45XCode.GDRingObjects1[i];
        ++k;
    }
}
gdjs.Raio_45XCode.GDRingObjects1.length = k;
if (isConditionTrue_0) {
/* Reuse gdjs.Raio_45XCode.GDRingObjects1 */
{for(var i = 0, len = gdjs.Raio_45XCode.GDRingObjects1.length ;i < len;++i) {
    gdjs.Raio_45XCode.GDRingObjects1[i].getBehavior("Scale").setScale(gdjs.Raio_45XCode.GDRingObjects1[i].getBehavior("Scale").getScale() + (gdjs.evtTools.runtimeScene.getElapsedTimeInSeconds(runtimeScene) * 1));
}
}
{ //Subevents
gdjs.Raio_45XCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("btn_next"), gdjs.Raio_45XCode.GDbtn_9595nextObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.Raio_45XCode.GDbtn_9595nextObjects1.length;i<l;++i) {
    if ( gdjs.Raio_45XCode.GDbtn_9595nextObjects1[i].IsClicked((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined)) ) {
        isConditionTrue_0 = true;
        gdjs.Raio_45XCode.GDbtn_9595nextObjects1[k] = gdjs.Raio_45XCode.GDbtn_9595nextObjects1[i];
        ++k;
    }
}
gdjs.Raio_45XCode.GDbtn_9595nextObjects1.length = k;
if (isConditionTrue_0) {
{gdjs.evtTools.sound.playSound(runtimeScene, "assets\\btn_press.mp3", false, 100, 1);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 2, 0, 0.5);
}{gdjs.evtTools.sound.fadeSoundVolume(runtimeScene, 3, 0, 0.5);
}
{ //Subevents
gdjs.Raio_45XCode.eventsList2(runtimeScene);} //End of subevents
}

}


};

gdjs.Raio_45XCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.Raio_45XCode.GDbackgroundObjects1.length = 0;
gdjs.Raio_45XCode.GDbackgroundObjects2.length = 0;
gdjs.Raio_45XCode.GDPainelObjects1.length = 0;
gdjs.Raio_45XCode.GDPainelObjects2.length = 0;
gdjs.Raio_45XCode.GDbtn_9595nextObjects1.length = 0;
gdjs.Raio_45XCode.GDbtn_9595nextObjects2.length = 0;
gdjs.Raio_45XCode.GDCursorObjects1.length = 0;
gdjs.Raio_45XCode.GDCursorObjects2.length = 0;
gdjs.Raio_45XCode.GDbtn_9595jogarObjects1.length = 0;
gdjs.Raio_45XCode.GDbtn_9595jogarObjects2.length = 0;
gdjs.Raio_45XCode.GDRingObjects1.length = 0;
gdjs.Raio_45XCode.GDRingObjects2.length = 0;
gdjs.Raio_45XCode.GDMagicObjects1.length = 0;
gdjs.Raio_45XCode.GDMagicObjects2.length = 0;
gdjs.Raio_45XCode.GDMagic2Objects1.length = 0;
gdjs.Raio_45XCode.GDMagic2Objects2.length = 0;
gdjs.Raio_45XCode.GDStarSparksObjects1.length = 0;
gdjs.Raio_45XCode.GDStarSparksObjects2.length = 0;
gdjs.Raio_45XCode.GDCaixa_9595AntigosObjects1.length = 0;
gdjs.Raio_45XCode.GDCaixa_9595AntigosObjects2.length = 0;
gdjs.Raio_45XCode.GDCaixa_9595AtuaisObjects1.length = 0;
gdjs.Raio_45XCode.GDCaixa_9595AtuaisObjects2.length = 0;
gdjs.Raio_45XCode.GDMonitorObjects1.length = 0;
gdjs.Raio_45XCode.GDMonitorObjects2.length = 0;
gdjs.Raio_45XCode.GDAcerto2Objects1.length = 0;
gdjs.Raio_45XCode.GDAcerto2Objects2.length = 0;
gdjs.Raio_45XCode.GDAcertoObjects1.length = 0;
gdjs.Raio_45XCode.GDAcertoObjects2.length = 0;

gdjs.Raio_45XCode.eventsList3(runtimeScene);
gdjs.Raio_45XCode.GDbackgroundObjects1.length = 0;
gdjs.Raio_45XCode.GDbackgroundObjects2.length = 0;
gdjs.Raio_45XCode.GDPainelObjects1.length = 0;
gdjs.Raio_45XCode.GDPainelObjects2.length = 0;
gdjs.Raio_45XCode.GDbtn_9595nextObjects1.length = 0;
gdjs.Raio_45XCode.GDbtn_9595nextObjects2.length = 0;
gdjs.Raio_45XCode.GDCursorObjects1.length = 0;
gdjs.Raio_45XCode.GDCursorObjects2.length = 0;
gdjs.Raio_45XCode.GDbtn_9595jogarObjects1.length = 0;
gdjs.Raio_45XCode.GDbtn_9595jogarObjects2.length = 0;
gdjs.Raio_45XCode.GDRingObjects1.length = 0;
gdjs.Raio_45XCode.GDRingObjects2.length = 0;
gdjs.Raio_45XCode.GDMagicObjects1.length = 0;
gdjs.Raio_45XCode.GDMagicObjects2.length = 0;
gdjs.Raio_45XCode.GDMagic2Objects1.length = 0;
gdjs.Raio_45XCode.GDMagic2Objects2.length = 0;
gdjs.Raio_45XCode.GDStarSparksObjects1.length = 0;
gdjs.Raio_45XCode.GDStarSparksObjects2.length = 0;
gdjs.Raio_45XCode.GDCaixa_9595AntigosObjects1.length = 0;
gdjs.Raio_45XCode.GDCaixa_9595AntigosObjects2.length = 0;
gdjs.Raio_45XCode.GDCaixa_9595AtuaisObjects1.length = 0;
gdjs.Raio_45XCode.GDCaixa_9595AtuaisObjects2.length = 0;
gdjs.Raio_45XCode.GDMonitorObjects1.length = 0;
gdjs.Raio_45XCode.GDMonitorObjects2.length = 0;
gdjs.Raio_45XCode.GDAcerto2Objects1.length = 0;
gdjs.Raio_45XCode.GDAcerto2Objects2.length = 0;
gdjs.Raio_45XCode.GDAcertoObjects1.length = 0;
gdjs.Raio_45XCode.GDAcertoObjects2.length = 0;


return;

}

gdjs['Raio_45XCode'] = gdjs.Raio_45XCode;
