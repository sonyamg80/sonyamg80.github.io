import pandas as pd


df = pd.read_csv('cities.csv')
df.head()
# This you can change it to whatever you want to get
age_15 = df[df['age'] == 'U15']
# Other examples:
bye = df[df['opp'] == 'Bye']
crushed_team = df[df['ACscr'] == '0']
crushed_visitor = df[df['OPPscr'] == '0']
# Play with this

# Use the .to_html() to get your table in html
print(crushed_visitor.to_html())