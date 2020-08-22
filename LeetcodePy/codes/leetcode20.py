def validBracket(strings):
    """
    :param strings:
    :return:
    """
    lefts=["(","[","{"]
    rights=[")","]","}"]
    stack=[]
    for i in strings:
        if i in lefts:
            stack.append(i)
        else:
            index=rights.index(i)
            if len(stack)==0:
                return False
            if lefts.index(stack[-1]) == index:
                stack.pop()
            else:
                return False
    if len(stack)==0:
        return True
    else:
        return False

strings = "](){}[]]"
print(validBracket(strings))