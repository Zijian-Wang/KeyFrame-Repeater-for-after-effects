# Key-Frame-Repeater-for-after-effects

- Key Frame Repeater 是一个 After Effects 的脚本，由 Zijian 开发并维护。
- Key Frame Repeater is an After Effects script developed and maintained by Zijian. 

# 功能 | Usage ：
- 选择一个或多个的图层属性（如 旋转、透明度、大小）并且输入两个数字变量以及改变的时间，可以自动生成一个 loopOut 语句以及关键帧，节省了一定的重复工作时间，帮助提高制作简单的重复动画的效率。
- With a selection of one or multiple layer properties (eg. Rotation/Transparency/Scale) and enter two numeric values with a delta frame time, this script can create a looping animation. The script is designed to help shorten the time for creating simple looping animation. 

# 更新日志 | Change Log  2021/06/16
- 增加了对二维属性修改的支持 | Added support for two demensional properties.
- 更名为 Key Frame Repeater | Changed name.

# 下一版本可能增加的功能 | Feature Pool:
- 增加关键帧间隔时间的随机属性 | Add Randomness support for key frame frequency
- 适应性的 UI 界面 | Responsive UI

**************************************************************************

做项目做烦了于是写了这个脚本，直接把 RotationRepeater(xxx版本号).jsx 拖入到 AE 的 ScriptUI 文件夹里就好了。

为AE里的旋转属性等单一数据维度的属性添加一个单一的循环关键帧
一共四个input
    第一个是首帧和尾帧的数值
    第二个是中间帧的数值
    第三个是关键帧之间的间隔时间，以帧数为单位
    第四个是选择是否为 hold keyframe，如果勾选则是 hold，不勾选是默认的没有 easy ease 的关键帧

目前还需改进的是
    Responsive Layout - 目前界面无法跟随窗口大小而改变layout，但 又不是不能用.png
    针对二维数组的支持？（好像二维数组直接手K会更方便点？）
