'use strict'

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */


//反链表
function ListNode(val) {
    this.val = val;
    this.next = null;
}

// 输入: 1->2->3->4->5->NULL
// 输出: 5->4->3->2->1->NULL

// let Node1 = new ListNode(1);
//
// let Node2 = new ListNode(2);
// Node1.next = Node2;
//
//
// let Node3 = new ListNode(3);
//
// Node2.next = Node3;
//
// let Node4 =new ListNode(4);
//
// Node3.next = Node4;
// let Node5 =new  ListNode(5);
// Node4.next = Node5;
//
// // 读取链表
// let startNode = Node1;
//
// while (startNode != null) {
//     console.log(startNode.val)
//     startNode = startNode.next
// }

// 遍历输出链表元素
function IterLstNode(root) {
    let result = []
    let startNode = root;
    while (startNode != null) {
        result.push(startNode.val)
        startNode = startNode.next
    }
    return result;
}

// datas =[1,2,3,4,5]
function CreateListNodes(datas) {
    let root = new ListNode(datas[0]);
    let Node1 = root;
    for (let i = 1; i < datas.length; i++) {
        let temp = new ListNode(datas[i]);
        Node1.next = temp;
        Node1 = Node1.next;
    }

    IterLstNode(root);
    return root
}




var reverseList = function (head) {
    if ( head == null) {
        return head
    }
    if (head.next == null) {
        return head
    }
    let datas = IterLstNode(head);
    datas = datas.reverse();
    console.log(datas,"reverse")
    let result = CreateListNodes(datas);
    return result;
};


let test = [1,2,3,4,5];
let datas = CreateListNodes(test);
console.log(reverseList(datas));
