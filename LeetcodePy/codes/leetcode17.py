def letterCombination(digits):
    """
    :param digits:
    :return:
    """
    dict = {
        "1":"",
        "2":"abc",
        "3":"def",
        "4":"ghi",
        "5":"jkl",
        "6":"mno",
        "7":"pqrs",
        "8":"tuv",
        "9":"wxyz"
    }
    if len(digits) == 1:
        list = []
        for i in dict[digits[0]]:
            list.append(i)
        return list
    else:
        list=[]
        res = letterCombination(digits[1:])
        for i in dict[digits[0]]:
            for j in res:
                list.append(i+j)
        return list


digits = "423"
print(letterCombination(digits))