# Rotation-Repeater-for-after-effects

做项目做烦了于是写了这个脚本，直接把 RotationRepeater(xxx版本号).jsx 拖入到 AE 的 ScriptUI 文件夹里就好了。

为AE里的旋转属性等单一数据维度的属性添加一个单一的循环关键帧
一共三个input
    第一个是首帧和尾帧的数值
    第二个是中间帧的数值
    然后是选择是否为 hold keyframe，如果勾选则是 hold，不勾选是默认的没有 easy ease 的关键帧

目前还需改进的是
    Responsive Layout - 目前界面无法跟随窗口大小而改变layout，但 又不是不能用.png
    针对二维数组的支持？（好像二维数组直接手K会更方便点？）