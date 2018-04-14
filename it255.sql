/*==============================================================*/
/* DBMS name:      PostgreSQL 8                                 */
/* Created on:     4/12/2018 4:39:25 PM                         */
/*==============================================================*/


drop index RELATIONSHIP_4_FK;

drop index ARANZMANI_PK;

drop table ARANZMANI;

drop index COUNTRYES_PK;

drop table COUNTRYES;

drop index RELATIONSHIP_6_FK;

drop index RELATIONSHIP_5_FK;

drop index KORPA_ARANZMANI_PK;

drop table KORPA_ARANZMANI;

drop index RELATIONSHIP_3_FK;

drop index RELATIONSHIP_2_FK;

drop index KORPA_LETOVI_PK;

drop table KORPA_LETOVI;

drop index LETOVI_PK;

drop table LETOVI;

drop index RELATIONSHIP_1_FK;

drop index USER_PK;

drop table "USER";

/*==============================================================*/
/* Table: ARANZMANI                                             */
/*==============================================================*/
create table ARANZMANI (
   ARANZMAN_ID          SERIAL not null,
   COUNTRY_ID           INT4                 null,
   HOTEL                VARCHAR(100)         null,
   CENA                 INT4                 null,
   constraint PK_ARANZMANI primary key (ARANZMAN_ID)
);

/*==============================================================*/
/* Index: ARANZMANI_PK                                          */
/*==============================================================*/
create unique index ARANZMANI_PK on ARANZMANI (
ARANZMAN_ID
);

/*==============================================================*/
/* Index: RELATIONSHIP_4_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_4_FK on ARANZMANI (
COUNTRY_ID
);

/*==============================================================*/
/* Table: COUNTRYES                                             */
/*==============================================================*/
create table COUNTRYES (
   COUNTRY_ID           SERIAL not null,
   COUNTRY_NAME         VARCHAR(50)          null,
   constraint PK_COUNTRYES primary key (COUNTRY_ID)
);

/*==============================================================*/
/* Index: COUNTRYES_PK                                          */
/*==============================================================*/
create unique index COUNTRYES_PK on COUNTRYES (
COUNTRY_ID
);

/*==============================================================*/
/* Table: KORPA_ARANZMANI                                       */
/*==============================================================*/
create table KORPA_ARANZMANI (
   KORPA_ARANZMAN_ID    SERIAL not null,
   USER_ID              INT4                 null,
   ARANZMAN_ID          INT4                 null,
   constraint PK_KORPA_ARANZMANI primary key (KORPA_ARANZMAN_ID)
);

/*==============================================================*/
/* Index: KORPA_ARANZMANI_PK                                    */
/*==============================================================*/
create unique index KORPA_ARANZMANI_PK on KORPA_ARANZMANI (
KORPA_ARANZMAN_ID
);

/*==============================================================*/
/* Index: RELATIONSHIP_5_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_5_FK on KORPA_ARANZMANI (
USER_ID
);

/*==============================================================*/
/* Index: RELATIONSHIP_6_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_6_FK on KORPA_ARANZMANI (
ARANZMAN_ID
);

/*==============================================================*/
/* Table: KORPA_LETOVI                                          */
/*==============================================================*/
create table KORPA_LETOVI (
   KORPA_ID             SERIAL not null,
   USER_ID              INT4                 null,
   LET_ID               INT4                 null,
   constraint PK_KORPA_LETOVI primary key (KORPA_ID)
);

/*==============================================================*/
/* Index: KORPA_LETOVI_PK                                       */
/*==============================================================*/
create unique index KORPA_LETOVI_PK on KORPA_LETOVI (
KORPA_ID
);

/*==============================================================*/
/* Index: RELATIONSHIP_2_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_2_FK on KORPA_LETOVI (
USER_ID
);

/*==============================================================*/
/* Index: RELATIONSHIP_3_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_3_FK on KORPA_LETOVI (
LET_ID
);

/*==============================================================*/
/* Table: LETOVI                                                */
/*==============================================================*/
create table LETOVI (
   LET_ID               SERIAL not null,
   MESTO_POLASKA        VARCHAR(100)         null,
   MESTO_DOLASKA        VARCHAR(100)         null,
   CENA                 INT4                 null,
   constraint PK_LETOVI primary key (LET_ID)
);

/*==============================================================*/
/* Index: LETOVI_PK                                             */
/*==============================================================*/
create unique index LETOVI_PK on LETOVI (
LET_ID
);

/*==============================================================*/
/* Table: "USER"                                                */
/*==============================================================*/
create table "USER" (
   USER_ID              SERIAL not null,
   COUNTRY_ID           INT4                 null,
   FIRSTNAME            VARCHAR(30)          null,
   LASTNAME             VARCHAR(30)          null,
   SEX                  VARCHAR(20)          null,
   MAIL                 VARCHAR(100)         null,
   PASSWORD             VARCHAR(1024)        null,
   constraint PK_USER primary key (USER_ID)
);

/*==============================================================*/
/* Index: USER_PK                                               */
/*==============================================================*/
create unique index USER_PK on "USER" (
USER_ID
);

/*==============================================================*/
/* Index: RELATIONSHIP_1_FK                                     */
/*==============================================================*/
create  index RELATIONSHIP_1_FK on "USER" (
COUNTRY_ID
);

alter table ARANZMANI
   add constraint FK_ARANZMAN_RELATIONS_COUNTRYE foreign key (COUNTRY_ID)
      references COUNTRYES (COUNTRY_ID)
      on delete restrict on update restrict;

alter table KORPA_ARANZMANI
   add constraint FK_KORPA_AR_RELATIONS_USER foreign key (USER_ID)
      references "USER" (USER_ID)
      on delete restrict on update restrict;

alter table KORPA_ARANZMANI
   add constraint FK_KORPA_AR_RELATIONS_ARANZMAN foreign key (ARANZMAN_ID)
      references ARANZMANI (ARANZMAN_ID)
      on delete restrict on update restrict;

alter table KORPA_LETOVI
   add constraint FK_KORPA_LE_RELATIONS_USER foreign key (USER_ID)
      references "USER" (USER_ID)
      on delete restrict on update restrict;

alter table KORPA_LETOVI
   add constraint FK_KORPA_LE_RELATIONS_LETOVI foreign key (LET_ID)
      references LETOVI (LET_ID)
      on delete restrict on update restrict;

alter table "USER"
   add constraint FK_USER_RELATIONS_COUNTRYE foreign key (COUNTRY_ID)
      references COUNTRYES (COUNTRY_ID)
      on delete restrict on update restrict;

