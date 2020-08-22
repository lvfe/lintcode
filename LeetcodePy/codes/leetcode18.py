def fourTarget(nums,target):
    """
    :nums, target
    :return:
    """
    nums.sort()
    list = []
    for idx in range(len(nums)-3):
        for jdx in range(idx+1,len(nums)-2):
            base = nums[idx]+nums[jdx]
            start,end=jdx+1,len(nums)-1
            while start<end:
                if base+nums[start]+nums[end] == target:
                    list.append((nums[idx],nums[jdx],nums[start],nums[end]))
                    start+=1
                    end-=1
                elif base+nums[start]+nums[end]>target:
                    end-=1
                else:
                    start+=1
    return list

nums = [1,0,-1,0,2,-2]
target = 0
print(fourTarget(nums,target))