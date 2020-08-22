def threeSumClose(nums, target):
    """
    :param nums:
    :param target:
    :return:
    """
    res = abs(nums[0]+nums[1]+nums[2]-target)
    nums.sort()
    for idx in range(0,len(nums)-2):
        for jdx in range(idx+1, len(nums)-1):
            for mdx in range(jdx+1, len(nums)):
                diff=nums[idx]+nums[jdx]+nums[mdx]-target
                if res>abs(diff):
                    res = diff+target
    return res
def threeSumOptimal(nums, target):
    """
    :param nums:
    :param target:
    :return:
    """
    res = abs(nums[0]+nums[1]+nums[2]-target)
    sum = nums[0]+ nums[1]+nums[2]
    nums.sort()
    for idx in range(len(nums)-2):
        start,end=idx+1,len(nums)-1

        while start<end:
            diff = nums[idx]+nums[start]+nums[end]-target
            if res>abs(diff):
                res = abs(diff)
                sum = nums[idx]+ nums[start]+nums[end]
            if diff>0:
                end-=1
            elif diff == 0:
                res = 0
                sum = target
                break
            else:
                start+=1

    return sum
nums = [2, 1, -4, -1]
target = 1
print(threeSumOptimal(nums, target))