var app = new Vue({
	el: '#app',
	data: {
		stu_name: "黄金超",
		lesson_name: "C++_Basic",
		lesson_names: [
			"C++_Basic",
			"C++_Level",
			"Scratch_Pre",
			"Scratch_Level",
			"Python"
		],
		lesson_content: [],
		lesson_contents: {
			"C++_Basic": [
				"输入输出",
				"条件分支",
				"while循环",
				"for循环",
				"变量与数据类型",
				"基础算法总结",
				"三种运算符",
				"循环应用",
				"一维数组",
				"二维数组",
				"字符串",
				"数组应用（一）",
				"数组应用（二）",
				"格式化输入输出",
				"阶段性复习",
				"枚举法",
				"函数",
				"函数应用",
				"递归",
				"线性数据结构",
				"简单排序算法",
				"文件与结构体",
				"树",
				"数据结构复习",
				"组合数学初步",
				"阅读程序专题",
				"完善程序专题",
				"程序的时空复杂度",
				"计算机基础知识（原码 反码 补码）",
				"计算机基础知识（硬件 软件 网络）",
				"计算机基础知识（进制转换）"
			],
			"C++_Level": [
				"C++_Level-1",
				"C++_Level-2",
				"C++_Level-3",
				"C++_Level-4",
				"C++_Level-5"
			],
			"Scratch_Pre": [
				"Scratch_Pre-1",
				"Scratch_Pre-2",
				"Scratch_Pre-3",
				"Scratch_Pre-4",
				"Scratch_Pre-5"
			],
			"Scratch_Level": [
				"Scratch_Level-1",
				"Scratch_Level-2",
				"Scratch_Level-3",
				"Scratch_Level-4",
				"Scratch_Level-5"
			],
			"Python": [
				"Python-1",
				"Python-2",
				"Python-3",
				"Python-4",
				"Python-5"
			],
		},
		show_comment: [],
		show_comments_bads: [
			"不是很自信",
			"不太认真，精神不太好",
			"上课时常常走神",
			"作业没有认真完成",
			"比较安静，默默听课",
			"上课时喜欢讨论课外内容"
		],
		show_comments_goods: [
			"很乐观",
			"编程基础很好",
			"思维活跃",
			"很有想法",
			"有很多自己的思考",
			"课堂上会积极的参与和尝试",
			"听课很认真",
			"一如既然的稳定与聪明",
			"能够灵活使用之前学过的内容",
			"紧跟老师节奏，能理解并实现课上内容",
			"积极举手回答老师的问题",
			"会积极的参与到课堂中",
			"非常认真听讲，精神非常好",
			"会在抢答中享受竞争和学习的乐趣",
			"能一直跟着老师的讲解积极思考",
			"提出了很多很有意思的问题"
		],
		final_comment: [],
		final_comments: [
			"非常棒，继续加油",
			"下一节课要努力一点点哟"
		]
	}
})