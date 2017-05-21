//
//  EnergyMeter.swift
//  CSE216
//
//  Created by Sean Hamilton on 5/20/17.
//  Copyright © 2017 Sean Hamilton. All rights reserved.
//

import UIKit

@IBDesignable
class EnergyMeter: UIView {

    @IBInspectable var fillColor = UIColor.black
    @IBInspectable var needleColor = UIColor.white

    override func draw(_ rect: CGRect) {
        // background
        backgroundColor?.setFill()
        UIRectFill(rect)
        
        // Meter
        let insetRect = rect.insetBy(dx: 1, dy: 1)
        let path = UIBezierPath(ovalIn: insetRect)
        path.lineWidth = 2
        fillColor.setStroke()
        fillColor.setFill()
        path.fill()
        path.stroke()
        
        // Needle
        
        
        // Limit Ring
    }
 
}
