run  = False
lists = [] 
mm = ""

def fishs(lists,fish):
    lists.append(fish)
    print(lists)
    

while(run == False):
    fish = input()
    if(fish == "0"):
        while True:
            mm = input()
            if(mm == "min"):
                lists.sort()
                out =" ".join(lists)
                print(out)
            if(mm == "max"):
                lists.sort(reverse = True)
                out = " ".join(lists)
                print(out)

    else:
        fishs(lists,fish)
        
    
