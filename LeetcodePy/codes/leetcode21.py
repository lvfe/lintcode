list1=[1,2,4]
list2=[1,3,4,6,7]
#list1.extend(list2)
list1.sort()
#print(list1)

def mergeList(list1, list2):
    """
    :param list1:
    :param list2:
    :return:
    """
    list=[]
    i,start=0,0
    while i<len(list1)and start<len(list2):

        if list1[i]<=list2[start]:
            list.append(list1[i])
            i+=1
        else:
            list.append(list2[start])
            start+=1
    print(i)
    print(start)
    if i==len(list1):
        while start<len(list2):
            list.append(list2[start])
            start+=1
    else:
        while i<len(list1):
            list.append(list1[i])
            i+=1
    return list
list1.sort()
list2.sort()
print(mergeList(list1,list2))