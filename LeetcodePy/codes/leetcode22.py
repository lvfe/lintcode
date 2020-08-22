res=[]

def dfs(l,r,n,cur):
    if l==n and r==n:
        res.append(cur)
        return
    if l<n:
        dfs(l+1,r,n,cur+"(")
    if r<l:
        dfs(l,r+1,n,cur+")")
def allParant(n):
    """
    :param n:
    :return:
    """
    lefts=[]
    rights=[]
    if n==0:
        return ""
    dfs(0,0,n,"")
    return res



n=3
print(allParant(n))