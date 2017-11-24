//
//  RCTIsoChartView.h
//  ReactNativeProjectTemplate
//
//  Created by Ismail Kurar on 15/11/2017.
//  Copyright © 2017 Facebook. All rights reserved.
//

#ifndef RCTIsoChartView_h
#define RCTIsoChartView_h


#endif /* RCTIsoChartView_h */

#import <React/RCTView.h>
#import <Charts/Charts.h>

@interface RCTIsoChartView : RCTView

@property (nonatomic, assign) BOOL drawCenterText;
@property (nonatomic, assign) NSString *centerText;
@property (nonatomic, assign) BOOL usePercentValues;
@property (nonatomic, assign) double holeRadius;
@property (nonatomic, assign) BOOL displayLegends;

@end

