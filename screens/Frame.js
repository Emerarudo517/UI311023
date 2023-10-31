import * as React from "react";
import { StyleSheet, View, Text } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Image } from "expo-image";
import { Color, FontFamily, Border, FontSize, Padding } from "../GlobalStyles";

const Frame = () => {
  return (
    <View style={styles.view}>
      <View style={[styles.helpAroundTheHouse, styles.iconFilterLayout]}>
        <View
          style={[styles.helpAroundTheHouseChild, styles.houseChildShadowBox]}
        />
        <Text style={[styles.helpAroundThe, styles.titelFlexBox]}>
          Help around the house
        </Text>
        <Text style={[styles.tasks, styles.dateTypo1]}>5 tasks</Text>
        <View style={[styles.iconHouse, styles.iconLayout2]}>
          <LinearGradient
            style={[styles.iconHouseChild, styles.iconLayout2]}
            locations={[0, 1]}
            colors={["rgba(247, 247, 247, 0.5)", "rgba(220, 223, 252, 0.5)"]}
          />
          <Image
            style={styles.bodyIcon}
            contentFit="cover"
            source={require("../assets/body.png")}
          />
          <View style={styles.shape1} />
          <LinearGradient
            style={[styles.shape2, styles.shape2Position]}
            locations={[0, 1]}
            colors={["#fff", "rgba(255, 255, 255, 0)"]}
          />
        </View>
        <Image
          style={[styles.iconmore, styles.shape2Position]}
          contentFit="cover"
          source={require("../assets/iconmore.png")}
        />
      </View>
      <View style={[styles.movingAndThings, styles.iconFilterLayout]}>
        <View
          style={[styles.movingAndThingsChild, styles.houseChildShadowBox]}
        />
        <Text style={[styles.helpAroundThe, styles.titelFlexBox]}>
          Moving and things
        </Text>
        <Text style={[styles.tasks, styles.dateTypo1]}>24 tasks</Text>
        <Image
          style={[styles.iconHouse, styles.iconLayout2]}
          contentFit="cover"
          source={require("../assets/icon-moving.png")}
        />
        <Image
          style={[styles.iconmore, styles.shape2Position]}
          contentFit="cover"
          source={require("../assets/iconmore.png")}
        />
      </View>
      <View style={[styles.titelbutton, styles.titelbuttonLayout]}>
        <Text style={[styles.categories, styles.titelFlexBox]}>Categories</Text>
        <View style={[styles.seeAll, styles.seeAllPosition]}>
          <Image
            style={[styles.iconArrow, styles.seeAllPosition]}
            contentFit="cover"
            source={require("../assets/icon-arrow.png")}
          />
          <Text style={styles.seeAll1}>See all</Text>
        </View>
      </View>
      <View style={styles.card}>
        <View style={styles.cardLayout}>
          <View style={styles.backgroundShadowBox} />
          <Image
            style={[styles.iconChat, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon-chat.png")}
          />
          <Text style={[styles.titel, styles.titelPosition]}>{`Go for a walk 
and feed the dog`}</Text>
          <Image
            style={[styles.imgdogcardIcon, styles.titelPosition]}
            contentFit="cover"
            source={require("../assets/imgdogcard.png")}
          />
          <View style={[styles.avanameverify, styles.nameFlexBox]}>
            <Image
              style={styles.avaIcon}
              contentFit="cover"
              source={require("../assets/ava.png")}
            />
            <View style={[styles.name, styles.nameFlexBox]}>
              <Text style={[styles.andersonG, styles.dateTypo]}>
                Anderson G.
              </Text>
              <Image
                style={styles.iconVerify}
                contentFit="cover"
                source={require("../assets/icon-verify.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.iconLike, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-like.png")}
          />
          <Text style={[styles.date, styles.dateTypo]}>Until 26.09</Text>
        </View>
        <View style={[styles.card2, styles.cardLayout]}>
          <View style={styles.backgroundShadowBox} />
          <Image
            style={[styles.iconChat1, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon-chat1.png")}
          />
          <Text style={[styles.titel, styles.titelPosition]}>{`Water the flowers
once a week`}</Text>
          <Image
            style={[styles.imgdogcardIcon, styles.titelPosition]}
            contentFit="cover"
            source={require("../assets/imgdogcard1.png")}
          />
          <Image
            style={[styles.imgdogcardIcon, styles.titelPosition]}
            contentFit="cover"
            source={require("../assets/rectangle-16.png")}
          />
          <View style={[styles.avanameverify, styles.nameFlexBox]}>
            <Image
              style={styles.avaIcon}
              contentFit="cover"
              source={require("../assets/ava1.png")}
            />
            <View style={[styles.name, styles.nameFlexBox]}>
              <Text style={[styles.andersonG, styles.dateTypo]}>Amelia A.</Text>
              <Image
                style={styles.iconVerify}
                contentFit="cover"
                source={require("../assets/icon-verify1.png")}
              />
            </View>
          </View>
          <Image
            style={[styles.iconLike1, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-like1.png")}
          />
          <Text style={[styles.date, styles.dateTypo]}>Until 28.09</Text>
        </View>
        <View style={[styles.card2, styles.cardLayout]}>
          <View style={styles.backgroundShadowBox} />
          <Image
            style={[styles.iconChat, styles.iconLayout1]}
            contentFit="cover"
            source={require("../assets/icon-chat1.png")}
          />
          <Text style={[styles.titel, styles.titelPosition]}>{`Feed your cat 
twice a day`}</Text>
          <Image
            style={[styles.imgdogcardIcon, styles.titelPosition]}
            contentFit="cover"
            source={require("../assets/imgdogcard2.png")}
          />
          <Image
            style={[styles.imgdogcardIcon, styles.titelPosition]}
            contentFit="cover"
            source={require("../assets/imgdogcard2.png")}
          />
          <View style={[styles.avanameverify, styles.nameFlexBox]}>
            <Image
              style={styles.avaIcon}
              contentFit="cover"
              source={require("../assets/ava2.png")}
            />
            <View style={[styles.name, styles.nameFlexBox]}>
              <Text style={[styles.andersonG, styles.dateTypo]}>
                Benjamin O.
              </Text>
            </View>
          </View>
          <Image
            style={[styles.iconLike, styles.iconLayout]}
            contentFit="cover"
            source={require("../assets/icon-like1.png")}
          />
          <Text style={[styles.date, styles.dateTypo]}>Until 30.09</Text>
        </View>
      </View>
      <View style={[styles.titelbutton1, styles.titelbuttonLayout]}>
        <Text style={[styles.categories, styles.titelFlexBox]}>
          Next to you
        </Text>
        <View style={[styles.onTheMap, styles.seeAllPosition]}>
          <Image
            style={[styles.iconArrow, styles.seeAllPosition]}
            contentFit="cover"
            source={require("../assets/icon-arrow.png")}
          />
          <Text style={styles.seeAll1}>On the map</Text>
        </View>
      </View>
      <Image
        style={[styles.iconFilter, styles.iconFilterLayout]}
        contentFit="cover"
        source={require("../assets/icon-filter.png")}
      />
      <View style={[styles.search, styles.searchLayout]}>
        <View style={[styles.searchChild, styles.searchLayout]} />
        <Text style={[styles.search1, styles.tasksTypo]}>Search</Text>
        <Image
          style={[styles.iconsearch, styles.titelbuttonLayout]}
          contentFit="cover"
          source={require("../assets/iconsearch.png")}
        />
      </View>
      <Image
        style={[styles.tabBarIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/tab-bar.png")}
      />
      <View style={[styles.homeindicator, styles.iconPosition]}>
        <View style={styles.homeIndicator} />
      </View>
      <Image
        style={[styles.statusbarIcon, styles.iconPosition]}
        contentFit="cover"
        source={require("../assets/statusbar.png")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  iconFilterLayout: {
    height: 72,
    position: "absolute",
  },
  houseChildShadowBox: {
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    left: 0,
    top: 0,
  },
  titelFlexBox: {
    textAlign: "left",
    color: Color.colorDarkslategray_100,
  },
  dateTypo1: {
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconLayout2: {
    height: 48,
    width: 48,
    borderRadius: Border.br_xs,
    position: "absolute",
  },
  shape2Position: {
    width: 6,
    top: 30,
    position: "absolute",
  },
  titelbuttonLayout: {
    height: 24,
    position: "absolute",
  },
  seeAllPosition: {
    right: 0,
    position: "absolute",
  },
  iconLayout1: {
    width: 30,
    top: 264,
    height: 30,
    position: "absolute",
  },
  titelPosition: {
    left: 16,
    position: "absolute",
  },
  nameFlexBox: {
    alignItems: "center",
    flexDirection: "row",
  },
  dateTypo: {
    color: Color.colorWhite,
    fontSize: FontSize.size_smi,
    textAlign: "left",
  },
  iconLayout: {
    maxHeight: "100%",
    maxWidth: "100%",
    bottom: "84.66%",
    top: "9.82%",
    width: "7.58%",
    height: "5.52%",
    position: "absolute",
    overflow: "hidden",
  },
  cardLayout: {
    height: 326,
    width: 264,
  },
  searchLayout: {
    width: 263,
    height: 48,
    position: "absolute",
  },
  tasksTypo: {
    fontSize: FontSize.size_sm,
    textAlign: "left",
  },
  iconPosition: {
    width: 375,
    left: 0,
    position: "absolute",
  },
  helpAroundTheHouseChild: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 18, 38, 0.03)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: Border.br_base,
    height: 72,
    width: 327,
    position: "absolute",
  },
  helpAroundThe: {
    bottom: 37,
    opacity: 0.9,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
    textAlign: "left",
    left: 72,
    position: "absolute",
  },
  tasks: {
    bottom: 16,
    color: Color.colorDarkslategray_200,
    fontSize: FontSize.size_sm,
    textAlign: "left",
    opacity: 0.9,
    left: 72,
  },
  iconHouseChild: {
    shadowColor: "rgba(25, 61, 131, 0.05)",
    shadowRadius: 25.84,
    elevation: 25.84,
    backgroundColor: "transparent",
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    left: 0,
    top: 0,
    height: 48,
    width: 48,
  },
  bodyIcon: {
    left: 2,
    borderRadius: 3,
    width: 46,
    height: 36,
    top: 0,
    position: "absolute",
  },
  shape1: {
    top: 21,
    left: 11,
    borderRadius: 6,
    backgroundColor: "rgba(255, 121, 127, 0.7)",
    width: 25,
    height: 19,
    position: "absolute",
  },
  shape2: {
    left: 29,
    borderRadius: 26,
    height: 11,
    transform: [
      {
        rotate: "90deg",
      },
    ],
    backgroundColor: "transparent",
  },
  iconHouse: {
    left: 12,
    top: 12,
    overflow: "hidden",
  },
  iconmore: {
    left: 305,
    height: 12,
  },
  helpAroundTheHouse: {
    top: 676,
    width: 327,
    left: 24,
  },
  movingAndThingsChild: {
    elevation: 20,
    shadowRadius: 20,
    shadowColor: "rgba(0, 18, 38, 0.03)",
    backgroundColor: Color.colorWhite,
    shadowOpacity: 1,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    borderRadius: Border.br_base,
    height: 72,
    width: 327,
    position: "absolute",
  },
  movingAndThings: {
    top: 588,
    width: 327,
    left: 24,
  },
  categories: {
    fontSize: FontSize.size_xl,
    fontWeight: "700",
    fontFamily: FontFamily.montserratBold,
    textAlign: "left",
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconArrow: {
    top: 6,
    width: 4,
    height: 7,
  },
  seeAll1: {
    marginTop: -8,
    top: "50%",
    right: 9,
    lineHeight: 16,
    fontFamily: FontFamily.montserratRegular,
    color: Color.colorDarkgray,
    textAlign: "right",
    fontSize: FontSize.size_smi,
    position: "absolute",
  },
  seeAll: {
    width: 51,
    height: 16,
    top: 4,
    right: 0,
  },
  titelbutton: {
    top: 544,
    width: 327,
    left: 24,
  },
  backgroundShadowBox: {
    borderRadius: Border.br_9xl,
    height: 326,
    width: 264,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 18, 38, 0.03)",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
    position: "absolute",
  },
  iconChat: {
    left: 214,
    height: 30,
  },
  titel: {
    bottom: 26,
    lineHeight: 22,
    opacity: 0.9,
    textAlign: "left",
    color: Color.colorDarkslategray_100,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    fontSize: FontSize.size_base,
  },
  imgdogcardIcon: {
    top: 16,
    width: 232,
    height: 228,
    borderRadius: Border.br_base,
    left: 16,
  },
  avaIcon: {
    width: 20,
    height: 20,
  },
  andersonG: {
    lineHeight: 14,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
  },
  iconVerify: {
    width: 16,
    marginLeft: 4,
    height: 16,
  },
  name: {
    marginLeft: 6,
  },
  avanameverify: {
    top: 202,
    left: 28,
    borderRadius: Border.br_11xl,
    backgroundColor: Color.colorGray_100,
    paddingLeft: Padding.p_7xs,
    paddingTop: Padding.p_8xs,
    paddingRight: Padding.p_5xs,
    paddingBottom: Padding.p_8xs,
    position: "absolute",
  },
  iconLike: {
    right: "12.12%",
    left: "80.3%",
  },
  date: {
    bottom: 276,
    left: 32,
    letterSpacing: -0.3,
    lineHeight: 20,
    opacity: 0.8,
    fontFamily: FontFamily.montserratMedium,
    fontWeight: "500",
    position: "absolute",
  },
  iconChat1: {
    left: 494,
    height: 30,
  },
  iconLike1: {
    right: "-93.94%",
    left: "186.36%",
  },
  card2: {
    marginLeft: 16,
  },
  card: {
    top: 188,
    flexDirection: "row",
    left: 24,
    position: "absolute",
  },
  onTheMap: {
    width: 88,
    height: 16,
    top: 4,
    right: 0,
  },
  titelbutton1: {
    top: 144,
    width: 327,
    left: 24,
  },
  iconFilter: {
    top: 60,
    left: 291,
    width: 72,
  },
  searchChild: {
    borderRadius: Border.br_xs,
    width: 263,
    shadowOpacity: 1,
    elevation: 20,
    shadowRadius: 20,
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowColor: "rgba(0, 18, 38, 0.03)",
    backgroundColor: Color.colorWhite,
    left: 0,
    top: 0,
  },
  search1: {
    top: 15,
    left: 48,
    opacity: 0.5,
    color: Color.colorDarkslategray_100,
    fontSize: FontSize.size_sm,
    fontFamily: FontFamily.montserratSemiBold,
    fontWeight: "600",
    position: "absolute",
  },
  iconsearch: {
    width: 24,
    opacity: 0.4,
    left: 12,
    top: 12,
    overflow: "hidden",
  },
  search: {
    top: 66,
    width: 263,
    left: 24,
  },
  tabBarIcon: {
    top: 715,
    height: 97,
  },
  homeIndicator: {
    marginLeft: -66.5,
    bottom: 8,
    left: "50%",
    borderRadius: 100,
    backgroundColor: Color.colorDarkslategray_100,
    width: 134,
    height: 5,
    position: "absolute",
  },
  homeindicator: {
    top: 782,
    height: 30,
  },
  statusbarIcon: {
    height: 44,
    top: 0,
  },
  view: {
    borderRadius: 32,
    backgroundColor: "#fcfcfc",
    flex: 1,
    width: "100%",
    height: 812,
    overflow: "hidden",
  },
});

export default Frame;
