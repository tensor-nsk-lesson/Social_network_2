
--
--Удаление таблиц
--

DROP TABLE IF EXISTS"Administrators" CASCADE;
DROP TABLE IF EXISTS"Blacklist" CASCADE;
DROP TABLE IF EXISTS"CPosts" CASCADE;
DROP TABLE IF EXISTS"Communities" CASCADE;
DROP TABLE IF EXISTS"Dialog" CASCADE;
DROP TABLE IF EXISTS"AllDialogs" CASCADE;
DROP TABLE IF EXISTS"Friendlist" CASCADE;
DROP TABLE IF EXISTS"Gender" CASCADE;
DROP TABLE IF EXISTS"Likes" CASCADE;
DROP TABLE IF EXISTS"MContent" CASCADE;
DROP TABLE IF EXISTS"Message" CASCADE;
DROP TABLE IF EXISTS"PContent" CASCADE;
DROP TABLE IF EXISTS"Post" CASCADE;
DROP TABLE IF EXISTS"Reg" CASCADE;
DROP TABLE IF EXISTS"Roles" CASCADE;
DROP TABLE IF EXISTS"Topics" CASCADE;
DROP TABLE IF EXISTS"UPosts" CASCADE;
DROP TABLE IF EXISTS"User" CASCADE;

--
--Создание таблиц
--

CREATE TABLE IF NOT EXISTS "Administrators" ( 
	"comm_id" serial not null,
	"user_id" int not null,
	"role" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "CPosts" ( 
	"comm_id" serial not null,
	"post_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Communities" ( 
	"id" serial not null,
	"name" text not null,
	"topic" int not null,
	"desc" text not null,
	"photo" text not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Dialog" ( 
	"id" serial not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "AllDialogs" ( 
	"user_id" serial not null,
	"dialog_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Friendlist" ( 
	"user_id" serial not null,
	"friend_id" int not null,
	"state_id" smallint not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Gender" ( 
	"id" serial not null,
	"name" text not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Likes" ( 
	"post_id" serial not null,
	"amount" int not null,
	PRIMARY KEY ("post_id")
) WITHOUT OIDS;
	
CREATE TABLE IF NOT EXISTS "MContent" ( 
	"id" serial not null,
	"content" text not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Message" ( 
	"id" serial not null,
	"dialog_id" int not null,
	"content_id" int not null,
	"date_time" timestamp not null,
	"user_id" int not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "PContent" ( 
	"id" serial not null,
	"content" text not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Post" ( 
	"id" serial not null,
	"content_id" int not null,
	"date_time" timestamp not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Roles" ( 
	"id" serial not null,
	"name" text not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Topics" ( 
	"id" serial not null,
	"name" text not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "UPosts" ( 
	"user_id" serial not null,
	"post_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "User" ( 
	"id" serial not null,
	"email" text not null,
	"password" text not null,
	"phone" text not null,
	"first_name" text not null,
	"second_name" text not null,
	"middle_name" text not null,
	"gender" int not null,
	"birthday" date not null,
	"country" text not null,
	"city" text not null,
	"photo" text not null,
	"verification" boolean not null,
	"private" boolean not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

--
--Добавление вторичных ключей	
--	
	
ALTER TABLE "Administrators" 
	ADD CONSTRAINT "Communities_fk_comm_id" FOREIGN KEY ("comm_id") REFERENCES "Communities" ("id");
ALTER TABLE "Administrators" 
	ADD CONSTRAINT "User_fk_user_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "Administrators" 
	ADD CONSTRAINT "Roles_fk_role" FOREIGN KEY ("role") REFERENCES "Roles" ("id");

ALTER TABLE "CPosts" 
	ADD CONSTRAINT "Communities_fk_comm_id" FOREIGN KEY ("comm_id") REFERENCES "Communities" ("id");
ALTER TABLE "CPosts" 
	ADD CONSTRAINT "Post_fk_post_id" FOREIGN KEY ("post_id") REFERENCES "Post" ("id");

ALTER TABLE "Communities" 
	ADD CONSTRAINT "Topics_fk_topic" FOREIGN KEY ("topic") REFERENCES "Topics" ("id");

ALTER TABLE "AllDialogs" 
	ADD CONSTRAINT "User_fk_iser_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "AllDialogs" 
	ADD CONSTRAINT "Dialog_fk_dialog_id" FOREIGN KEY ("dialog_id") REFERENCES "Dialog" ("id");

ALTER TABLE "Friendlist" 
	ADD CONSTRAINT "User_fk_user_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "Friendlist" 
	ADD CONSTRAINT "User_fk_friend_id" FOREIGN KEY ("friend_id") REFERENCES "User" ("id");
	
ALTER TABLE "Likes" 
	ADD CONSTRAINT "Post_fk_post_id" FOREIGN KEY ("post_id") REFERENCES "Post" ("id");	
	
ALTER TABLE "Message" 
	ADD CONSTRAINT "User_fk_user_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "Message" 
	ADD CONSTRAINT "Dialog_fk_dialog_id" FOREIGN KEY ("dialog_id") REFERENCES "Dialog" ("id");
ALTER TABLE "Message" 
	ADD CONSTRAINT "MContent_fk_content_id" FOREIGN KEY ("content_id") REFERENCES "MContent" ("id");

ALTER TABLE "Post" 
	ADD CONSTRAINT "PContent_fk_content_id" FOREIGN KEY ("content_id") REFERENCES "PContent" ("id");

ALTER TABLE "UPosts" 
	ADD CONSTRAINT "User_fk_user_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "UPosts" 
	ADD CONSTRAINT "Post_fk_post_id" FOREIGN KEY ("post_id") REFERENCES "Post" ("id");

ALTER TABLE "User" 
	ADD CONSTRAINT "Gender_fk_gender" FOREIGN KEY ("gender") REFERENCES "Gender" ("id");
		