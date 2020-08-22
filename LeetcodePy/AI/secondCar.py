import numpy as np
import pandas as pd
import matplotlib
import matplotlib.pyplot as plt
import seaborn as sns

df = pd.read_csv('../AI/car.csv')
print(df)
# feature engineering
# df_colors = df['Color'].str.get_dummies().add_prefix('Color: ')
# df_type = df['Type'].apply(str).str.get_dummies().add_prefix('Type: ')
# df = pd.concat([df,df_colors,df_type],axis=1)
# df=df.drop(['Brand','Type','Color'],axis=1)
# print(df)
np.array([1,2])
print(np.array([1]))
