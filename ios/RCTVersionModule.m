//
//  RCTVersionModule.m
//  VetApp
//
//  Created by Alavila Guadalupe on 20/08/23.
//

#import <Foundation/Foundation.h>
#import "RCTVersionModule.h"

@implementation RCTVersionModule

// To export a module named RCTVersionModule
RCT_EXPORT_MODULE(VersionModule);

+ (BOOL)requiresMainQueueSetup
{
   return NO;
}

- (NSDictionary *)constantsToExport
{
  return @{
    @"appVersion"      : [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleShortVersionString"] ?: [NSNull null],
    @"buildVersion"    : [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleVersion"] ?: [NSNull null],
    @"bundleIdentifier": [[NSBundle mainBundle] objectForInfoDictionaryKey:@"CFBundleIdentifier"] ?: [NSNull null]
  };
}

@end
