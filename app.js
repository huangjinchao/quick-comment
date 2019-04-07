var app = new Vue({
	el: '#app',
	data: {
		stu_name: "",
		lesson_name: "",
		lesson_content: "",
		lesson_contents: [
			"输入输出语句",
			"条件分支语句",
			"条件分支语句的应用",
			"循环语句语句",
			"一维数组",
			"多维数组",
			"函数",
			"结构体",
		],
		show_comment: [],
		show_comments: [
			"紧跟老师节奏，能理解并实现课上内容，",
			"不太认真，精神不太好，",
			"非常认真听讲，精神非常好，"
		],
		final_comment: "",
		final_comments: [
			"非常棒，继续加油！",
			"下一节课要努力一点点哟！"
		]
	}
})