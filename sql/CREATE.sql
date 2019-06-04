
--
--Удаление таблиц
--

DROP TABLE IF EXISTS"Administrators" CASCADE;
DROP TABLE IF EXISTS"AllDialogs" CASCADE;
DROP TABLE IF EXISTS"CAlbom" CASCADE;
DROP TABLE IF EXISTS"CPhoto" CASCADE;
DROP TABLE IF EXISTS"CPosts" CASCADE;
DROP TABLE IF EXISTS"City" CASCADE;
DROP TABLE IF EXISTS"Communities" CASCADE;
DROP TABLE IF EXISTS"Country" CASCADE;
DROP TABLE IF EXISTS"DPhoto" CASCADE;
DROP TABLE IF EXISTS"Dialog" CASCADE;
DROP TABLE IF EXISTS"Friendlist" CASCADE;
DROP TABLE IF EXISTS"Gender" CASCADE;
DROP TABLE IF EXISTS"Likes" CASCADE;
DROP TABLE IF EXISTS"MContent" CASCADE;
DROP TABLE IF EXISTS"Message" CASCADE;
DROP TABLE IF EXISTS"PContent" CASCADE;
DROP TABLE IF EXISTS"Photo" CASCADE;
DROP TABLE IF EXISTS"Post" CASCADE;
DROP TABLE IF EXISTS"Roles" CASCADE;
DROP TABLE IF EXISTS"Topics" CASCADE;
DROP TABLE IF EXISTS"UAlbom" CASCADE;
DROP TABLE IF EXISTS"UPhoto" CASCADE;
DROP TABLE IF EXISTS"UPosts" CASCADE;
DROP TABLE IF EXISTS"USubs" CASCADE;
DROP TABLE IF EXISTS"User" CASCADE;

--
--Создание таблиц
--

CREATE TABLE IF NOT EXISTS "Administrators" ( 
	"comm_id" int not null,
	"user_id" int not null,
	"role_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "AllDialogs" ( 
	"user_id" int not null,
	"dialog_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "CAlbom" (
	"id" serial not null,
	"name" text not null,
	"comm_id" int not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "CPhoto" (
	"albom_id" int not null,
	"photo_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "CPosts" ( 
	"comm_id" int not null,
	"post_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "City" (
	"id" serial not null,
	"name" text not null,
	"country_id" int not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Communities" ( 
	"id" serial not null,
	"name" text not null,
	"topic_id" int not null,
	"desc" text not null,
	"photo" text not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Country" (
	"id" serial not null,
	"name" text not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "DPhoto" (
	"dialog_id" int not null,
	"photo_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Dialog" ( 
	"id" serial not null,
	"name" text not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Friendlist" ( 
	"user_id" int not null,
	"friend_id" int not null,
	"state_id" smallint not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "Gender" ( 
	"id" int not null,
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

CREATE TABLE IF NOT EXISTS "Photo" (
	"id" serial not null,
	"photo" text not null,
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

CREATE TABLE IF NOT EXISTS "UAlbom" (
	"id" serial not null,
	"name" text not null,
	"user_id" int not null,
	PRIMARY KEY ("id")
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "UPhoto" (
	"albom_id" int not null,
	"photo_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "UPosts" ( 
	"user_id" int not null,
	"post_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "USubs" (
	"user_id" int not null,
	"comm_id" int not null
) WITHOUT OIDS;

CREATE TABLE IF NOT EXISTS "User" ( 
	"id" serial not null,
	"email" text not null,
	"password" text not null,
	"phone" text not null,
	"first_name" text not null,
	"second_name" text not null,
	"middle_name" text not null,
	"gender_id" int not null,
	"birthday" date not null,
	"country_id" int not null,
	"city_id" int not null,
	"photo_id" int not null,
	"verification" boolean not null default false,
	"private" boolean not null default false,
	"deleted" boolean not null default false,
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
	ADD CONSTRAINT "Roles_fk_role" FOREIGN KEY ("role_id") REFERENCES "Roles" ("id");

ALTER TABLE "AllDialogs" 
	ADD CONSTRAINT "User_fk_iser_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "AllDialogs" 
	ADD CONSTRAINT "Dialog_fk_dialog_id" FOREIGN KEY ("dialog_id") REFERENCES "Dialog" ("id");

ALTER TABLE "CAlbom" 
	ADD CONSTRAINT "Communities_fk_comm_id" FOREIGN KEY ("comm_id") REFERENCES "Communities" ("id");

ALTER TABLE "CPhoto" 
	ADD CONSTRAINT "CAlbom_fk_albom_id" FOREIGN KEY ("albom_id") REFERENCES "CAlbom" ("id");
ALTER TABLE "CPhoto" 
	ADD CONSTRAINT "Photo_fk_photo_id" FOREIGN KEY ("photo_id") REFERENCES "Photo" ("id");

ALTER TABLE "CPosts" 
	ADD CONSTRAINT "Communities_fk_comm_id" FOREIGN KEY ("comm_id") REFERENCES "Communities" ("id");
ALTER TABLE "CPosts" 
	ADD CONSTRAINT "Post_fk_post_id" FOREIGN KEY ("post_id") REFERENCES "Post" ("id");

ALTER TABLE "City"
	ADD CONSTRAINT "Country_fk_county_id" FOREIGN KEY ("country_id") REFERENCES "Country" ("id");

ALTER TABLE "Communities" 
	ADD CONSTRAINT "Topics_fk_topic" FOREIGN KEY ("topic_id") REFERENCES "Topics" ("id");

ALTER TABLE "DPhoto" 
	ADD CONSTRAINT "Dialog_fk_dialog_id" FOREIGN KEY ("dialog_id") REFERENCES "Dialog" ("id");
ALTER TABLE "DPhoto" 
	ADD CONSTRAINT "Photo_fk_photo_id" FOREIGN KEY ("photo_id") REFERENCES "Photo" ("id");

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

ALTER TABLE "UAlbom" 
	ADD CONSTRAINT "User_fk_user_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");

ALTER TABLE "UPhoto" 
	ADD CONSTRAINT "UAlbom_fk_albom_id" FOREIGN KEY ("albom_id") REFERENCES "UAlbom" ("id");
ALTER TABLE "UPhoto" 
	ADD CONSTRAINT "Photo_fk_photo_id" FOREIGN KEY ("photo_id") REFERENCES "Photo" ("id");

ALTER TABLE "UPosts" 
	ADD CONSTRAINT "User_fk_user_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "UPosts" 
	ADD CONSTRAINT "Post_fk_post_id" FOREIGN KEY ("post_id") REFERENCES "Post" ("id");

ALTER TABLE "USubs"
	ADD CONSTRAINT "User_fk_user_id" FOREIGN KEY ("user_id") REFERENCES "User" ("id");
ALTER TABLE "USubs"
	ADD CONSTRAINT "Communities_fk_comm_id" FOREIGN KEY ("comm_id") REFERENCES "Communities" ("id");

ALTER TABLE "User" 
	ADD CONSTRAINT "Gender_fk_gender" FOREIGN KEY ("gender_id") REFERENCES "Gender" ("id");
ALTER TABLE "User" 
	ADD CONSTRAINT "City_fk_city_id" FOREIGN KEY ("city_id") REFERENCES "City" ("id");
ALTER TABLE "User" 
	ADD CONSTRAINT "Country_fk_country_id" FOREIGN KEY ("country_id") REFERENCES "Country" ("id");
ALTER TABLE "User" 
	ADD CONSTRAINT "Photo_fk_photo_id" FOREIGN KEY ("photo_id") REFERENCES "Photo" ("id");
