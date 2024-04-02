# Проєктування бази даних

## модель бізнес-об'єктів

@startuml

entity User
entity User.email
entity User.password
entity User.isBanned

entity Participant

entity Role
entity Role.name

entity Grant

entity Permission
entity Permission.name
entity Permission.role

User.username -d-* User
User.password -r-* User
User.email -u-* User
User.isBanned -u-* User

Role.name -u-* Role

Permission.name -u-* Permission
Permission.role -u-* Permission

User "1,1"-r-"0,*" Participant
Participant "0,*"-r-"1,1" Role
Role "1,1"-r-"0,*" Grant
Grant "0,*"-r-"1,1" Permission

@enduml

## ER-модель

## реляційна схема 