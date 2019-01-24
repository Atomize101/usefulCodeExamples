
def bubbleSort(alist):
	for passnum in range(len(alist)-1, 0, -1):
		for i in range(passnum):
			if alist[i] > alist[i+1]:
				temp = alist[i]
				alist[i] = alist[i+1]
				alist[i+1] = temp

alist = [24, 69, 56, 45, 32, 87, 92, 13, 6, 13, 17]
bubbleSort(alist)
print(alist)