USE NEW;

select * from dependent;

select * from employee;

drop table dependent;
create table dependent 
(
ESSN int , 
dependent_name VARCHAR(50),
sex CHAR(2),
Bdate date,
foreign key (ESSN) references employee(SSN),
primary key(ESSN,dependent_name)
);
select * from dependent;
alter table dependent add phone char(11) unique;
alter table dependant drop column phone;
insert into dependant values(112233 ,'MEME','F',19701017);
insert into dependant(ESSN,dependent_name) values(112233 ,'SOSO');

update dependant 
set dependent_name = 'SOSO'
where sex='f';

update dependant 
set sex = 'm',
Bdate=19971018
where dependent_name='ahmed';

delete from dependant 
where dependant_name='xxx';