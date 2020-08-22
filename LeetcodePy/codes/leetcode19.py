class Lnode(object):
    def __init__(self,x):
        self.val = x
        self.next = None
def deleteN(LNode,n):
    """
    :param LNode:
    :param n:
    :return:
    """
    firstnode=LNode
    secondnode=LNode
    i=0
    while i<n:
        secondnode=secondnode.next
        i+=1
    finalnode=firstnode
    while secondnode.next:
        firstnode=firstnode.next
        secondnode=secondnode.next
    firstnode.next=firstnode.next.next
    return finalnode

def deleteNode(lnode,n):
    """
    :param lnode:
    :param n:
    :return:
    """
    head = lnode
    length=0
    while lnode:
        length+=1
        lnode=lnode.next
    newhead = head
    while i<length-n-1:
        head=head.next
    head.next = head.next.next
    return newhead

list=[2,4,5]
no=2
head = Lnode(2)
lnode = head
for i in list:
    if i ==0:
        continue
    temp = Lnode(i)
    lnode.next = temp
    lnode = temp

lnode.next=None
deleteN(head,2)