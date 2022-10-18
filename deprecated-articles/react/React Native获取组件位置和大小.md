1. onLayout事件属性
`<View onLayout={this._onLayout}><View>`
```javascript
_onLayout = (e) => {
    let {x,y,width,height} = e.nativeEvent.layout
}
// or
import {NativeModules} from 'react-native'
_onLayout = (e) => {
     NativeModules.UIManager.measure(e.target, (x, y, width, height, pageX, pageY)=>{
         // todo
    })
}
```
2.  元素自带measure方法
```
this.refs.yournode.measure((x,y,width,height,pageX, pageY) => {
       //todo
       })
```

3. 使用UIManager measure方法
```javascript
import {
   UIManager,
   findNodeHandle
} from 'react-native'

const handleClick = () => {
    UIManager.measure(findNodeHandle(this.buttonRef),(x,y,width,height,pageX,pageY)=>{
        // todo
 })
    
}
```
在组件上添加引用
`<TouchableButton ref={(ref)=>this.buttonRef=ref} onPress={this.handleClick}/>`