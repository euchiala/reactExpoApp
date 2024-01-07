import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Svg, Circle } from 'react-native-svg';

export default function Pagination() {
    return (
        <View style={styles.pagination}>
            {/* Vigma RN:: can be replaced with <Dot1 size={"small"} state={"active"} /> */}
            <View style={styles.dot1}>
                <Svg style={styles.dot} width="8" height="8" viewBox="0 0 8 8" fill="none" >
                    <Circle cx="4" cy="4" r="4" transform="rotate(-90 4 4)" fill="#09111F" />
                </Svg>

            </View>
            {/* Vigma RN:: can be replaced with <Dot2 size={"small"} state={"default"} /> */}
            <View style={styles.dot2}>
                <Svg style={styles._dot} width="8" height="8" viewBox="0 0 8 8" fill="none" >
                    <Circle cx="4" cy="4" r="4" transform="rotate(-90 4 4)" fill="white" />
                </Svg>

            </View>
            {/* Vigma RN:: can be replaced with <Dot3 size={"small"} state={"default"} /> */}
            <View style={styles.dot3}>
                <Svg style={styles.__dot} width="8" height="8" viewBox="0 0 8 8" fill="none" >
                    <Circle cx="4" cy="4" r="4" transform="rotate(-90 4 4)" fill="white" />
                </Svg>

            </View>
            {/* Vigma RN:: can be replaced with <Dot4 size={"small"} state={"default"} /> */}
            <View style={styles.dot4}>
                <Svg style={styles.___dot} width="8" height="8" viewBox="0 0 8 8" fill="none" >
                    <Circle cx="4" cy="4" r="4" transform="rotate(-90 4 4)" fill="white" />
                </Svg>

            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    pagination: {
        flexShrink: 0,
        flexDirection: "row",
        alignItems: "center",
        columnGap: 12
    },
    dot1: {
        flexShrink: 0,
        height: 8,
        width: 8,
        transform: [
            {
                rotateZ: "-90.00deg"
            }
        ],
        alignItems: "flex-start",
        rowGap: 0
    },
    dot: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "visible"
    },
    dot2: {
        flexShrink: 0,
        height: 8,
        width: 8,
        transform: [
            {
                rotateZ: "-90.00deg"
            }
        ],
        alignItems: "flex-start",
        rowGap: 0
    },
    _dot: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "visible"
    },
    dot3: {
        flexShrink: 0,
        height: 8,
        width: 8,
        transform: [
            {
                rotateZ: "-90.00deg"
            }
        ],
        alignItems: "flex-start",
        rowGap: 0
    },
    __dot: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "visible"
    },
    dot4: {
        flexShrink: 0,
        height: 8,
        width: 8,
        transform: [
            {
                rotateZ: "-90.00deg"
            }
        ],
        alignItems: "flex-start",
        rowGap: 0
    },
    ___dot: {
        position: "absolute",
        flexShrink: 0,
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        overflow: "visible"
    }
})