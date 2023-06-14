package com.codecool.service;

import com.codecool.entity.Asset;
import com.codecool.repository.AssetRepository;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class AssetService {
    private final AssetRepository assetRepository;

    public AssetService(AssetRepository assetRepository) {
        this.assetRepository = assetRepository;
    }

    public List<Asset> getAllAssets() {
        return assetRepository.findAll();
    }

    public Asset getAssetById(Long id) {
        return assetRepository.findById(id).orElseThrow(() -> new RuntimeException("Asset not found"));
    }

    public void deleteAssetById(Long id) {
        assetRepository.deleteById(id);
    }

    public Asset updateAssetById() {
        return null;
    }

    public Asset addAsset(Asset asset) {
        return assetRepository.save(asset);
    }



}
