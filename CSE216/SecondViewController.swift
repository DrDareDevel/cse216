//
//  SecondViewController.swift
//  CSE216
//
//  Created by Sean Hamilton on 5/20/17.
//  Copyright © 2017 Sean Hamilton. All rights reserved.
//

import UIKit

class SecondViewController: UIViewController {
    

    @IBOutlet weak var meter: EnergyMeter!
    @IBOutlet weak var slider: UISlider!
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }

    @IBAction func valueChanged(_ sender: UITextField) {
        meter.value = Double(sender.text!)!
    }
}

