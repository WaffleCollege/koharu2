def count_paths():
  n , m = 6,6 
  # 二次元配列の横、縦
  blocked = {(2,2),(5,1)}
  dp = [[0] * m for _ in range(n)]
  
  dp[0][0] = 1
  
  for i in range(n):
    for j in range(m):
      if (i, j) not in blocked:
      # 今いる座標が通れるならば
        if i - 1 => 0:
        # 
          dp[i][j] += dp[i-1][j]
        if j - 1 => 0:
          dp[i][j] += dp[i][j-1]
          
  return dp[-1][-1]

print(count_paths())
