
--
--Создание таблиц
--

CREATE TABLE IF NOT EXISTS "Administrators" ( 
	"comm_id" serial not null,
	"user_id" int not null,
	"role" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Blacklist" ( 
	"id" serial not null,
	"blocked_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "CPosts" ( 
	"comm_id" serial not null,
	"post_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Communities" ( 
	"id" serial not null,
	"name" varchar not null,
	"topic" int not null,
	"desc" varchar not null,
	"photo" varchar not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Dialog" ( 
	"id" serial not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Dialogs" ( 
	"user_id" serial not null,
	"dialog_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Friends" ( 
	"user_id" serial not null,
	"friend_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Gender" ( 
	"id" serial not null,
	"name" varchar not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Likes" ( 
	"post_id" serial not null,
	"amount" int not null,
	PRIMARY KEY ("post_id")
) WITHOUT OIDS;
	
CREATE TABLE IF NOT EXISTS "MContent" ( 
	"id" serial not null,
	"content" varchar not null,
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
	"content" varchar not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Post" ( 
	"id" serial not null,
	"content_id" int not null,
	"date_time" timestamp not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Reg" ( 
	"id" serial not null,
	"email" varchar not null,
	"phone" varchar not null,
	"password" varchar not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Roles" ( 
	"id" serial not null,
	"name" varchar not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Topics" ( 
	"id" serial not null,
	"name" varchar not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "UPosts" ( 
	"user_id" serial not null,
	"post_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "User" ( 
	"id" serial not null,
	"id_reg" int not null,
	"first_name" varchar not null,
	"second_name" varchar not null,
	"middle_name" varchar not null,
	"gender" int not null,
	"birthday" date not null,
	"country" varchar not null,
	"city" varchar not null,
	"photo" varchar not null,
	"verification" bit not null,
	"private" bit not null,
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

ALTER TABLE "Blacklist" 
	ADD CONSTRAINT "User_fk_id" FOREIGN KEY ("id") REFERENCES "User" ("id");
ALTER TABLE "Blacklist" 
	ADD CONSTRAINT "User_fk_blocked_id" FOREIGN KEY ("blocked_id") REFERENCES "User" ("id");

ALTER TABLE "CPosts" 
	ADD CONSTRAINT "Communities_fk_comm_id" FOREIGN KEY ("comm_id") REFERENCES "Communities" ("id");
ALTER TABLE "CPosts" 
	ADD CONSTRAINT "Post_fk_post_id" FOREIGN KEY ("post_id") REFERENCES "Post" ("id");

ALTER TABLE "Communities" 
	ADD CONSTRAINT "Topics_fk_topic" FOREIGN KEY ("topic") REFERENCES "Topics" ("id");

ALTER TABLE "Dialogs" 
	ADD CONSTRAINT "User_fk_iser_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "Dialogs" 
	ADD CONSTRAINT "Dialog_fk_dialog_id" FOREIGN KEY ("dialog_id") REFERENCES "Dialog" ("id");

ALTER TABLE "Friends" 
	ADD CONSTRAINT "User_fk_user_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "Friends" 
	ADD CONSTRAINT "User_fk_freind_id" FOREIGN KEY ("friend_id") REFERENCES "User" ("id");
	
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
ALTER TABLE "User" 
	ADD CONSTRAINT "Reg_fk_id_reg" FOREIGN KEY ("id_reg") REFERENCES "Reg" ("id");
		