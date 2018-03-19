CREATE FUNCTION getNthHighestSalary(N INT) RETURNS INT
BEGIN
  RETURN (
      # Write your MySQL query statement below.
      select min(Salary) from (select Salary from Employee group by Salary order by Salary desc limit N) as a having count(*) > N-1
  );
END

# Can't use any expresion follow 'limit'. So, select the min value and using 'having' to test null