# Write your MySQL query statement below
select (select Salary from Employee group by Salary order by Salary DESC limit 1,1) as SecondHighestSalary