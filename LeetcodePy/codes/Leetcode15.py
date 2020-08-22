def threeSum(nums, target):
    """
    :param nums:
    :return:
    """
    res = []
    nums.sort()
    for idx in range(len(nums)-1):
        start,end = idx+1, len(nums)-1
        while start<end:
            if nums[idx]+nums[start]+nums[end]==0:
                res.append((nums[idx],nums[start],nums[end]))
                flag = 1
                flag1 = 1
                while nums[end] == nums[end-1]:
                    flag = 0
                    end-=1
                while nums[start] == nums[start+1]:
                    flag1 = 0
                    start+=1
                if flag == 1:
                    end-=1
                if flag1 == 1:
                    start+=1
            elif nums[idx]+nums[start]+nums[end]>0:
                while nums[end] == nums[end-1]:
                    end-=1
                end-=1
            else:
                flag = 1
                while nums[start] == nums[start+1]:
                    flag=0
                    start+=1
                start+=1
    return res

nums = [-1,0,1,-1,4,2]
target = 1
print(threeSum(nums,target))

