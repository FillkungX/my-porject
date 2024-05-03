
w = input("Enter youe weight(kg): ")
h = input("Enter your hight(cm): ")
res = ""

h = float(h)/100
bmi = float(w)/float(h)**2
# bmi = float(input("BMI : "))

if bmi >= 30:
    res = "อ้วนมาก"
elif bmi <= 29.9 and  bmi >= 25.0:
    res = "อ้วน" 
elif bmi <= 24.9 and bmi >= 18.6:
    res ="น้ำหนักปกติ เหมาะสม"
elif bmi < 18.5:
    res = "ผอมเกินไป"
else:
    res = "Error โปรดใส่ค่าที่ถูกต้อง"

print("ค่า ฺBMI ของคุณคือ: "+str(bmi))
print("ผลของคุณคือ: "+str(res))
